import { newFile, newFolder, cut, copy, paste, copyPath, rename, deleteElement } from './helpers.js';

const FolderTools = (id) => {

   

    return (
        <div className="folder-context-menu-container">
            <main className='content'>
                <ul className='folder-context-menu-options'>
                    <li onClick={newFile(id)}>New file</li>
                    <li onClick={newFolder(id)}>New folder</li>
                    <li onClick={copy(id)}>Copy</li>
                    <li onClick={copy(id)}>Copy to instance</li>
                    <li onClick={cut(id)}>Cut</li>
                    <li onClick={paste(id)}>Paste</li>
                    <li onClick={copyPath(id)}>Copy path</li>
                    <li onClick={rename(id)}>Rename</li>
                    <li onClick={deleteFile(id)}>Delete</li>
                </ul>
            </main>

        </div>
    )
}

export default FolderTools;