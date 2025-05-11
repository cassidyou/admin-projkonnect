$(".dropify").dropify({
  messages: {
    default: "Drag and drop your file here or <strong>browse</strong>",
  },
  error: {
    fileSize: "The file size is too big (2M max).",
  },
  tpl: {
    message:
      '<div class="dropify-message"><span class="file-icon" /> <p style="font-size: 18px!important; color: #000000; opacity: 0.7;"><b>{{ default }}</b></p><small style="font-size: 14px">Accepted formats: xlsx, xls</small><br></div>',
  },
});
