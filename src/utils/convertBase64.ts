const convertBase64 = (
  file: Blob
): Promise<string | ArrayBuffer | null> => {
  return new Promise( ( resolve, reject ) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL( file )

    fileReader.onload = () => {
      resolve( fileReader.result )
    }

    fileReader.onerror = ( error ) => {
      reject( error )
    }
  } )
}

export default convertBase64
