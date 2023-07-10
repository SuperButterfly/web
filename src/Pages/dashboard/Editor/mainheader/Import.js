import React from 'react'
import styles from './Import.module.css'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export default function Import({ toggleModalImport }) {
  const handleDirectoryUpload = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (file.type === 'application/x-directory') {
        // Handle directory
        // You can access the directory information using file.webkitRelativePath
        console.log('Directory:', file.webkitRelativePath)
      } else {
        // Handle single file
        const formData = new FormData()
        formData.append('file', file)

        axios
          .post('/import', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            console.log('File uploaded successfully')
          })
          .catch((error) => {
            console.error('Error uploading file:', error)
          })
      }
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDirectoryUpload,
    multiple: false,
    directory: true
  })

  return (
    <>
      <div className={styles.closingDiv} onClick={toggleModalImport}></div>
      <div className={styles.modalImport}>
        <div className={styles.modalContentImport}>
          <h4>Upload your file</h4>
          <div
            {...getRootProps({ className: styles.inputFile })}
            onDrop={handleDirectoryUpload}
          >
            <input {...getInputProps()} />
            <p>
              Drag and drop a file or directory here, or click to select a file
              or directory
            </p>
          </div>
          <button onClick={toggleModalImport}>Cerrar</button>
        </div>
      </div>
    </>
  )
}
