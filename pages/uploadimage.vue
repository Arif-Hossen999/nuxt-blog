<template>
  <div>
    <input type="file" @change="onFileChanged($event)" />
    <v-btn @click="onUpload">Upload!</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    // upload image
    async onUpload() {
      try {
        if (this.selectedFile) {
          const formData = new FormData();
          formData.append("image", this.selectedFile, this.selectedFile.name);
          // console.log(formData, "formData")
          await this.$axios
            .$post("/api/images", formData, {
              headers: {
                "content-type": "multipart/form-data"
              }
            })
            .then(response => {
              if (response.length) {
                this.$toast.error("Image upload failed");
              } else {
                this.$toast.success("Successfully uploaded");
                this.$router.push({ name: "profile" });
              }
            });
        }else{
            this.$toast.error("Please select an image.");
        }
      } catch (error) {
        console.log(error, "error");
        this.$toast.error("Something went wrong.");
      }
    }
  }
};
</script>
