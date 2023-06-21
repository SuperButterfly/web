export const newFile = () => {

}

export const newFolder = () => {

}

export const copy = (content) => {
    localStorage.setItem("copiedElement", content);
    console.log("copy", content);
}

export const copyToInstance = () => {

}

export const cut = (content) => {
    copy(content);
    //dispatch(deleteElement(content.id));

}

export const paste = () => {
    const pastedComponent = localStorage.getItem("copiedElement");
    const body = {
      component: pastedComponent,
      parentId: componentSelected.id,
    };
    console.log("paste", body);
    dispatch(pasteComponent(body));
}