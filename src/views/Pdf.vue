<template>
  <div class="dashboard">
        <h1 class="subheading grey--text">Pdf Viewer</h1>

        <v-container class="my-5">
          <PDFViewer
            v-bind="{url}"
            @document-errored="onDocumentErrored"
            >
            <PDFUploader
              v-if="enableUploader"
              :documentError="documentError"
              @updated="urlUpdated"
              slot="header"
              class="header-item"
              />
          </PDFViewer>
        </v-container>
    
  </div>
</template>

<script>
import PDFUploader from '../components/PDFUploader.vue'
import PDFViewer from '../components/PDFViewer.vue'
export default {
  name: 'app',
  components: {
    PDFUploader,
    PDFViewer,
  },
  data() {
    return {
      url: "/pdf.pdf",
      documentError: undefined,
      enableUploader: process.env.VUE_APP_UPLOAD_ENABLED === 'true',
    };
  },
  methods: {
    urlUpdated(url) {
      this.documentError = undefined;
      this.url = url;
    },
    onDocumentErrored(e) {
      this.documentError = e.text;
    },
  },
}
</script>

<style>

</style>
