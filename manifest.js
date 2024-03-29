//generate a manifest file given a file

function getFileName(File file) {
  return File.getName;
}

function getFileType(File file) {
  var filename = File.getName();
  return filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
}

function getUUID() {
  return uuidv4();
}

function getFileId() {
  return uuidv1();
}

function createManifest(File file) {
  const manifest = {
    id: getFileId,
    fileName: getFileName,
    fileType: getFileType,
    uuid: getUUID
  }
  console.log(manifest);
  return manifest;
}

function setHash(manifest, hash) {
  manifest.hash = hash;
  return manifest;
}

module.exports.generateManifest = createManifest;
module.exports.setHash = setHash;
