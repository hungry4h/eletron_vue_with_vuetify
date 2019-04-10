<template>

    <div class="pdf-viewer">
      <v-layout>
        <v-flex>
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
        </v-flex>
      </v-layout>
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
      //url: "",
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
  computed: {
    url() {
      return "/" + this.$route.params.filename
    },
  },
}
</script>

<style>
.pdf-viewer {
  background-color: #73739e;
}
.container {
  padding:0;
}
</style>
