//email
const { google } = require("googleapis");
const MailComposer = require("nodemailer/lib/mail-composer");

const credentials = require("../google/credentials_google.json");
const tokens = require("../google/tokens.json");
const { saveNotification } = require("../utils/notification.js");
const { Workspace } = require('../database.js')

const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

const getGmailService = () => {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
//crea el mail y lo codifica, solo crea el mail y lo codifica no lo envia
const createMail = async (from, to, subject, body) => {
  const mailOptions = {
    from: from,
    to,
    subject,
    html: body,
  };

  const mailComposer = new MailComposer(mailOptions);
  const message = await mailComposer.compile().build();

  return encodeMessage(message);
};

const sendMail = async (req, res, next) => {
  const { from, to, subject, html } = req.body;

  try {
    const gmail = getGmailService();
    const message = await createMail(from, to, subject, html);

    const resultEmail = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: message,
      },
    });

    const notification = {
      type: subject,
      message: html,
    }
    const user = {
      email: to,
    }
    const notificationResult = await saveNotification(notification, user)
    if(notificationResult !== 'ok') {
      throw new Error(notificationResult)
    }
    
    res.json(resultEmail.data.labelIds)

  }
  catch (error) {
    return next(error)
  }
}

const sharingWorkspace = async (req, res, next) => {
  const { workspaceId, from, to, as } = req.body;
  try {
    const workspace = await Workspace.findByPk(workspaceId);
    
    const html = `Hello.
    You have been invited to join to the ${workspace.name} as ${as} workspace of user ${from}.`;
    const gmail = getGmailService();
    const message = await createMail(from, to, "Sharing Workspace", html);
    
    const resultEmail = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: message,
      },
    });
    
    const notification = {
      type: "invitation",
      message: html,
      workspace: workspaceId,
    }
    const user = {
      email: to,
    }
    await saveNotification(notification, user)
    
    res.send(resultEmail.data.labelIds[0]);
  }
  catch (error) {
    return next(error)
  }
}

const unsharingWorkspace = async (req, res, next) => {
  const { workspaceId, from, to } = req.body;
  try {
    const workspace = await Workspace.findByPk(workspaceId);
    
    const html = `Hello.
    user ${from} is no longer sharing the ${workspace.name}, workspace with you.`;
    const gmail = getGmailService();
    const message = await createMail(from, to, "Sharing Workspace", html);
    
    const resultEmail = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: message,
      },
    });
    
    const notification = {
      type: "notification",
      message: html,
      workspace: workspaceId,
    }
    await saveNotification(notification, { email: to })
    
    res.send(resultEmail.data.labelIds[0]);
  } catch (error) {
    return next(error)
  }
}

module.exports = { createMail, getGmailService, sendMail, sharingWorkspace, unsharingWorkspace }
//module.exports = {createMail, getGmailService}
