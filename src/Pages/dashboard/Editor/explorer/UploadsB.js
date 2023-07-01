import "./UploadsB.css";
import { useState, useEffect, useCallback } from "react";

const Uploads = ({ uploadSearch }) => {
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const [images, setImages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [active, setActive] = useState(-1);

  let totalSize = images.reduce((acc, sizeImg) => {
    return acc + sizeImg.SizeFile;
  }, 0);
  let totalSizeB = filtered.reduce((acc, sizeImg) => {
    return acc + sizeImg.SizeFile;
  }, 0);

  /**Logica para filtrar imagenes por busqueda */
  useEffect(() => {
    let filteredImages = images?.filter((img) => {
      return img.name.toLowerCase().includes(uploadSearch.toLowerCase());
    });
    setFiltered(filteredImages);
  }, [uploadSearch]);

  /**Logica para filtrar imagenes por busqueda */

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setShowOptions(!showOptions);
  };

  const handleCreateFolder = () => {
    const baseName = "New Folder";
    let num = 1;
    let newName = baseName;

    while (folders.includes(newName)) {
      num++;
      newName = `${baseName} ${num}`;
    }

    setFolders((prevFolders) => [...prevFolders, newName]);
  };

  const handleRenameFolder = (index, newName) => {
    const newFolders = [...folders];
    newFolders[index] = newName;
    setFolders(newFolders);
    setActive(-1);
  };

  const handleDeleteFolder = useCallback((folder) => {
    if (`Delete folder "${folder}" and all its assets?`) {
      setFolders((prevFolders) =>
        prevFolders.filter((name) => name !== folder)
      );
      setFolderName("");
    }
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    let dragContainer = document.getElementById("uploads-container1");
    const files = e.dataTransfer.files;
    showFiles(files);
    dragContainer.classList.remove("uploads-container01_active");
  };

  const showFiles = (files) => {
    if (files.length === undefined) {
      processFile(files);
    } else {
      for (const file of files) {
        processFile(file);
      }
    }
  };
  const processFile = (file) => {
    let docType = file.type;
    console.log(file);
    //console.log(docType)
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];

    if (validExtensions.includes(docType)) {
      const fileReader = new FileReader();
      const id = `file-${Math.random().toString(32).substring(7)}`;

      fileReader.addEventListener("load", (e) => {
        const fileUrl = fileReader.result;

        const fileName = file.name.split(".")[0];
        setImages((prev) => [
          ...prev,
          {
            src: fileUrl,
            name: fileName,
            SizeFile: file.size,
            date: file.lastModifiedDate,
          },
        ]);
        //console.log(fileUrl)
        //console.log(image[0])
      });
      //función de devolución de llamada que se ejecuta cuando el archivo ha sido leído.
      fileReader.readAsDataURL(file);
      //window.alert("archivo valido")
    } else {
      window.alert("no es un archivo valido");
    }
  };
  /**logica para el drag al editor panel */
  const handleDrag = (id, src) => {
    localStorage.setItem("text", id);
    localStorage.setItem("src", src);
    console.log("aca el drag", id, src);
  };

  /**logica para el drag de imagenes a cargar */
  const handleDragOver = (event) => {
    event.preventDefault();
    let dragContainer = document.getElementById("uploads-container1");
    dragContainer.classList.add("uploads-container01_active");
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    let dragContainer = document.getElementById("uploads-container1");
    dragContainer.classList.remove("uploads-container01_active");
  };
  const handleFileChange = (e) => {
    let files = e.target.files;
    showFiles(files);
  };

  return (
    <div className="uploads-container">
      {!images.length ? (
        <>
          <div className="uploads-container03">
            <div className="uploads-container04">
              <span className="uploads-text02">Assets</span>
            </div>

            <div className="uploads-container05">
              <svg
                onClick={handleCreateFolder}
                viewBox="0 0 1024 1024"
                className="uploads-icon02"
              >
                <path d="M981.333 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-361.173l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-213.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM896 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h190.507l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM384 640h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>

          <div className="folders">
            {folders.map((folder, index) => (
              <div className="asset-folder" key={index} id="hover-folder">
                <div className="left-side-folder">
                  <div className="icon-container-assets ">
                    <div className="icon-container2">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        id="uploads-icon04"
                      >
                        <path d="M877.714 749.714v-402.286c0-30.286-24.571-54.857-54.857-54.857h-402.286c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v548.571c0 30.286 24.571 54.857 54.857 54.857h694.857c30.286 0 54.857-24.571 54.857-54.857zM950.857 347.429v402.286c0 70.286-57.714 128-128 128h-694.857c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h384c70.286 0 128 57.714 128 128z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1090.8525714285713 1024"
                        id="uploads-icon06"
                      >
                        <path d="M1017.714 532c0-16-17.714-20-30.286-20h-621.714c-30.286 0-70.286 18.857-89.714 42.286l-168 207.429c-5.143 6.857-10.286 14.286-10.286 22.857 0 16 17.714 20 30.286 20h621.714c30.286 0 70.286-18.857 89.714-42.857l168-207.429c5.143-6.286 10.286-13.714 10.286-22.286zM365.714 438.857h438.857v-91.429c0-30.286-24.571-54.857-54.857-54.857h-329.143c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v487.429l146.286-180c33.143-40.571 94.286-69.714 146.286-69.714zM1090.857 532c0 25.143-10.857 49.143-26.286 68.571l-168.571 207.429c-32.571 40-94.857 69.714-146.286 69.714h-621.714c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128v91.429h109.714c38.857 0 77.714 17.714 94.857 54.286 5.714 12 8.571 25.143 8.571 38.857z"></path>
                      </svg>
                    </div>
                  </div>
                  {active === index ? (
                    <form
                      id="rename"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleRenameFolder(index, e.target.newName.value);
                      }}
                    >
                      <input
                        className="input"
                        type="text"
                        name="newName"
                        defaultValue={folder}
                        onBlur={() => setActive(-1)}
                        autoFocus
                      />
                    </form>
                  ) : (
                    <div className="text-left">{folder}</div>
                  )}

                  <button
                    className="pt-btn-transparent"
                    onClick={() => handleButtonClick(index)}
                  >
                    <div className="buton-svg">
                      <svg viewBox="0 0 1024 1024" className="uploads-icon08">
                        <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
                      </svg>
                    </div>
                  </button>
                </div>

                <div
                  className="uploads-container07"
                  style={{
                    display:
                      activeIndex === index && showOptions ? "flex" : "none",
                  }}
                >
                  <span
                    className="uploads-text05"
                    onClick={() => setActive(index)}
                  >
                    Rename
                  </span>

                  <span
                    className="uploads-text06"
                    onClick={() => handleDeleteFolder(folder)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="uploads-container01"
            id="uploads-container1"
          >
            <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 1h36a1 1 0 011 1v36a1 1 0 01-1 1H10.476v1H38a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v26.571h1V2a1 1 0 011-1zm2.823 29.476a.794.794 0 00-.794.794v3.235H.794a.794.794 0 000 1.588h3.235v3.113a.794.794 0 101.588 0v-3.113H8.73a.794.794 0 100-1.588H5.617V31.27a.794.794 0 00-.794-.794zm13.004-15.714a2.382 2.382 0 11-4.763-.002 2.382 2.382 0 014.763.002zm3.012.274a.5.5 0 01.866 0L29.09 27.82a.5.5 0 01-.433.75H13.886a.5.5 0 01-.433-.75l1.137-1.968h-3.248a.5.5 0 01-.433-.75l3.26-5.643a.5.5 0 01.866 0l1.624 2.81 4.18-7.234z"
                    fill="#BFBFBF"
                  ></path>
                </svg>
              </div>
            </div>

            <span id="styles">
              Choose files <br /> or drag and drop
            </span>

            <div className="file-select" id="src-file1">
              <input
                onChange={handleFileChange}
                type="file"
                name="src-file1"
              ></input>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="uploads-container01"
            id="uploads-container1"
          >
            <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 1h36a1 1 0 011 1v36a1 1 0 01-1 1H10.476v1H38a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v26.571h1V2a1 1 0 011-1zm2.823 29.476a.794.794 0 00-.794.794v3.235H.794a.794.794 0 000 1.588h3.235v3.113a.794.794 0 101.588 0v-3.113H8.73a.794.794 0 100-1.588H5.617V31.27a.794.794 0 00-.794-.794zm13.004-15.714a2.382 2.382 0 11-4.763-.002 2.382 2.382 0 014.763.002zm3.012.274a.5.5 0 01.866 0L29.09 27.82a.5.5 0 01-.433.75H13.886a.5.5 0 01-.433-.75l1.137-1.968h-3.248a.5.5 0 01-.433-.75l3.26-5.643a.5.5 0 01.866 0l1.624 2.81 4.18-7.234z"
                    fill="#BFBFBF"
                  ></path>
                </svg>
              </div>
            </div>

            <span id="styles">
              Choose files <br /> or drag and drop
            </span>

            <div className="file-select" id="src-file1">
              <input
                onChange={handleFileChange}
                type="file"
                name="src-file1"
              ></input>
            </div>
          </div>

          <div className="uploads-container03">
            <div className="uploads-container04">
              <span className="uploads-text02">Assets</span>
            </div>

            <div className="uploads-container05">
              <svg
                onClick={handleCreateFolder}
                viewBox="0 0 1024 1024"
                className="uploads-icon02"
              >
                <path d="M981.333 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-361.173l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-213.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM896 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h190.507l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM384 640h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>

          <div className="folders">
            {folders.map((folder, index) => (
              <div className="asset-folder" key={index} id="hover-folder">
                <div className="left-side-folder">
                  <div className="icon-container-assets ">
                    <div className="icon-container2">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        id="uploads-icon04"
                      >
                        <path d="M877.714 749.714v-402.286c0-30.286-24.571-54.857-54.857-54.857h-402.286c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v548.571c0 30.286 24.571 54.857 54.857 54.857h694.857c30.286 0 54.857-24.571 54.857-54.857zM950.857 347.429v402.286c0 70.286-57.714 128-128 128h-694.857c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h384c70.286 0 128 57.714 128 128z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1090.8525714285713 1024"
                        id="uploads-icon06"
                      >
                        <path d="M1017.714 532c0-16-17.714-20-30.286-20h-621.714c-30.286 0-70.286 18.857-89.714 42.286l-168 207.429c-5.143 6.857-10.286 14.286-10.286 22.857 0 16 17.714 20 30.286 20h621.714c30.286 0 70.286-18.857 89.714-42.857l168-207.429c5.143-6.286 10.286-13.714 10.286-22.286zM365.714 438.857h438.857v-91.429c0-30.286-24.571-54.857-54.857-54.857h-329.143c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v487.429l146.286-180c33.143-40.571 94.286-69.714 146.286-69.714zM1090.857 532c0 25.143-10.857 49.143-26.286 68.571l-168.571 207.429c-32.571 40-94.857 69.714-146.286 69.714h-621.714c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128v91.429h109.714c38.857 0 77.714 17.714 94.857 54.286 5.714 12 8.571 25.143 8.571 38.857z"></path>
                      </svg>
                    </div>
                  </div>
                  {active === index ? (
                    <form
                      id="rename"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleRenameFolder(index, e.target.newName.value);
                      }}
                    >
                      <input
                        className="input"
                        type="text"
                        name="newName"
                        defaultValue={folder}
                        onBlur={() => setActive(-1)}
                        autoFocus
                      />
                    </form>
                  ) : (
                    <div className="text-left">{folder}</div>
                  )}

                  <button
                    className="pt-btn-transparent"
                    onClick={() => handleButtonClick(index)}
                  >
                    <div className="buton-svg">
                      <svg viewBox="0 0 1024 1024" className="uploads-icon08">
                        <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
                      </svg>
                    </div>
                  </button>
                </div>

                <div
                  className="uploads-container07"
                  style={{
                    display:
                      activeIndex === index && showOptions ? "flex" : "none",
                  }}
                >
                  <span
                    className="uploads-text05"
                    onClick={() => setActive(index)}
                  >
                    Rename
                  </span>

                  <span
                    className="uploads-text06"
                    onClick={() => handleDeleteFolder(folder)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="jsx-4233665541">
            <label className="jsx-3743795215">
              <input
                name="checkbox"
                type="checkbox"
                className="jsx-3743795215 "
              ></input>
              <span className="jsx-3743795215 checkmark"></span>
              <span className="jsx-3743795215 label-text">All Files</span>
            </label>

            <div className="button-container">
              <button
                data-tooltip-name="Move selected to folder"
                aria-label="Move selected to folder"
                className="pt-btn-transparent-neutral"
              >
                <div className="pt-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 4v6.5c0 .824-.676 1.5-1.5 1.5h-11C.676 12 0 11.324 0 10.5v-9C0 .676.676 0 1.5 0h2.325a1.496 1.496 0 011.32.79L5.797 2H12.5c.824 0 1.5.676 1.5 1.5V4zM3.824 1H1.5c-.281 0-.5.219-.5.5V2h3.664l-.398-.738A.509.509 0 003.824 1zm3.63 8.083a.435.435 0 010-.624l.957-.92H4.42A.43.43 0 014 7.095a.43.43 0 01.42-.441h4.04l-.96-.9a.435.435 0 010-.626.46.46 0 01.639 0L9.854 6.74a.435.435 0 01.013.637l-.005.006-1.77 1.7a.46.46 0 01-.638 0z"
                      fill="#B3B3B3"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.854 6.74a.48.48 0 01.014.013l-.014-.013z"
                      fill="#B3B3B3"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                data-tooltip-name="Download selected"
                aria-label="Download selected"
                className="pt-btn-transparent"
              >
                <div className="pt-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 2a.5.5 0 01.5.5v8.793l3.313-3.313a.5.5 0 11.707.707l-4.166 4.167a.5.5 0 01-.708 0L5.48 8.687a.5.5 0 01.707-.707L9.5 11.293V2.5A.5.5 0 0110 2zM2.5 12a.5.5 0 01.5.5v1c0 .708 0 1.21.032 1.601.032.386.092.622.186.807a2 2 0 00.874.874c.185.094.42.154.807.186C5.29 17 5.792 17 6.5 17h7c.708 0 1.21 0 1.601-.032.386-.032.622-.092.807-.186a2 2 0 00.874-.874c.094-.185.154-.42.186-.807C17 14.71 17 14.208 17 13.5v-1a.5.5 0 011 0v1.022c0 .681 0 1.223-.036 1.66-.036.448-.113.83-.291 1.18a3 3 0 01-1.311 1.311c-.35.178-.731.255-1.18.291-.437.036-.979.036-1.66.036H6.478c-.681 0-1.223 0-1.66-.036-.449-.036-.83-.113-1.18-.291a3 3 0 01-1.311-1.311c-.178-.35-.255-.731-.291-1.18C2 14.746 2 14.204 2 13.523V12.5a.5.5 0 01.5-.5z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                data-tooltip-name="Delete selected"
                aria-label="Delete selected"
                className="pt-btn"
              >
                <div className="pt-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.634 2.447h.885c.882-.001 1.764-.002 2.646.01.951.011 1.735.799 1.826 1.8.095 1.044-.542 1.989-1.488 2.203-.133.031-.271.036-.409.036H1.907C.923 6.496.2 5.854.029 4.821c-.2-1.184.656-2.348 1.754-2.363 1.122-.016 2.244-.01 3.36-.006.148 0 .2-.046.234-.203C5.676.898 6.755-.011 8.029 0c1.193.01 2.267.97 2.548 2.28.023.046.037.096.055.16l.002.007zm-8.77.95c-.675.042-1.108.746-.88 1.424.148.428.514.679 1.008.679h11.974c.095 0 .19-.006.285-.021.613-.115.989-.82.765-1.425-.157-.417-.508-.657-.96-.657H1.864zm4.416-.96h3.37c-.171-.845-.87-1.435-1.673-1.43-.794 0-1.54.621-1.697 1.43z"
                    ></path>
                    <path d="M3.712 19.926a3.038 3.038 0 01-.517-.192c-1.017-.538-1.574-1.435-1.583-2.672-.016-2.575-.012-5.155-.007-7.732v-.002l.002-1.287c0-.407.266-.626.6-.512.18.063.275.193.299.397.007.059.006.117.005.176V16.931c0 .95.446 1.686 1.202 1.963.2.073.418.104.627.11 2.434.005 4.863.005 7.297.005 1.036 0 1.81-.846 1.81-1.988V8.234c0-.1 0-.198.015-.292.033-.282.209-.439.466-.428.242.01.408.177.432.448.005.063.005.13.005.194v8.786c0 1.545-.903 2.74-2.286 3.027a.146.146 0 00-.046.021l-.007.005-.01.005c-2.699-.005-5.39-.005-8.084-.005a7.223 7.223 0 00-.22-.07z"></path>
                    <path d="M7.525 8.088v4.45c0 .846 0 1.691-.005 2.536v.637c-.002.424-.003.849 0 1.273.005.35.167.553.438.558.28.006.475-.266.475-.668V8.167c0-.089-.005-.183-.02-.271-.028-.188-.123-.308-.28-.366-.342-.125-.608.115-.608.559zM5.248 12.492v4.424c0 .397-.223.658-.527.621-.195-.026-.328-.167-.366-.391-.015-.105-.02-.209-.024-.313v-8.62c0-.282.01-.558.285-.673.333-.141.623.094.627.527.004.452.003.904.001 1.357v.678c.004.798.004 1.591.004 2.39zM10.72 8.114v4.404c0 1.44 0 2.88-.006 4.325 0 .089 0 .183.01.272.024.24.157.396.357.427.308.047.537-.203.537-.6V8.088c0-.047 0-.1-.005-.146-.029-.204-.119-.345-.29-.407-.342-.13-.604.11-.604.579z"></path>
                  </svg>
                </div>
              </button>
            </div>

            <label className="pt-switch">
              <span className="label-text undefined undefined">
                Preview at Hover
              </span>
              <div className="toggle">
                <input type="checkbox" className="checkbox" />
                <span className="slider"></span>
              </div>
            </label>
          </div>

          {!filtered.length ? (
            <div className="uploads-container19">
              <div className="uploads-container20">
                <span className="uploads-text12">{images.length} File - </span>
                <span className="uploads-text12">
                  {(totalSize / 1048576).toFixed(2)} MB
                </span>
              </div>

              <div className="image-content">
                <div className="image-content2">
                  <div className="image-content3">
                    {images.map((image, index) => (
                      <div className="image-content4">
                        <img
                          key={index}
                          heigth="130px"
                          width="100%"
                          src={image.src}
                          alt={image.name}
                          draggable="true"
                          onDrag={() => handleDrag("Image", image.src)}
                        ></img>

                        <div className="asset-overlay">
                          <div className="asset-overlay1">
                            <label className="jsx-3743795215">
                              <input
                                name="checkbox"
                                type="checkbox"
                                className="jsx-3743795215 "
                              ></input>
                            </label>
                            <span className="uploads-text12">
                              {(image.SizeFile / 1024).toFixed(2)} KB
                            </span>

                            <button
                              className="pt-btn-transparent-jsx-3535535137"
                              onClick={handleButtonClick}
                            >
                              <svg
                                viewBox="0 0 1024 1024"
                                className="uploads-icon08"
                              >
                                <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
                              </svg>
                            </button>
                          </div>

                          <div className="asset-overlay2">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="uploads-icon25"
                              onClick={() => handleDrag("Image", image.src)}
                            >
                              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="uploads-icon27"
                            >
                              <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                              <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                            </svg>
                          </div>
                          <div className="asset-overlay3">
                            <span className="uploads-text12">
                              {" "}
                              {image.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="uploads-container19">
              <div className="uploads-container20">
                <span className="uploads-text12">
                  {filtered.length} File -{" "}
                </span>
                <span className="uploads-text12">
                  {(totalSizeB / 1048576).toFixed(2)} MB
                </span>
              </div>

              <div className="image-content">
                <div className="image-content2">
                  <div className="image-content3">
                    {filtered.map((image, index) => (
                      <div className="image-content4">
                        <img
                          key={index}
                          heigth="130px"
                          width="100%"
                          src={image.src}
                          alt={image.name}
                          draggable="true"
                          onDrag={() => handleDrag("Image", image.src)}
                        ></img>

                        <div className="asset-overlay">
                          <div className="asset-overlay1">
                            <label className="jsx-3743795215">
                              <input
                                name="checkbox"
                                type="checkbox"
                                className="jsx-3743795215 "
                              ></input>
                            </label>
                            <span className="uploads-text12">
                              {(image.SizeFile / 1024).toFixed(2)} KB
                            </span>

                            <button
                              className="pt-btn-transparent-jsx-3535535137"
                              onClick={handleButtonClick}
                            >
                              <svg
                                viewBox="0 0 1024 1024"
                                className="uploads-icon08"
                              >
                                <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
                              </svg>
                            </button>
                          </div>

                          <div className="asset-overlay2">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="uploads-icon25"
                              onClick={() => handleDrag("Image", image.src)}
                            >
                              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="uploads-icon27"
                            >
                              <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                              <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                            </svg>
                          </div>
                          <div className="asset-overlay3">
                            <span className="uploads-text12">{image.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Uploads;
