<template>
  <div>
    <div>
      <video ref="video" id="video" width="480" height="640" autoplay v-if="cameraActive"></video>
    </div>
    <canvas ref="canvas" id="canvas" width="480" height="640" v-show="!cameraActive"></canvas>
    <label for="noteArea">Short Description</label>
    <br>
    <textarea id="noteArea" name="note" rows="3" v-model="note"></textarea>
    <div>
      <button id="snap" @click="takePic()" v-show="cameraActive">Snap Receipt</button>
    </div>
    <div>
      <button id="snap" @click="savePic()" v-show="!cameraActive">Save Receipt</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    takePic: function() {
      this.canvas = this.$refs.canvas;
      let context = this.canvas.getContext("2d");
      context.drawImage(this.video, 0, 0, 480, 640);

      this.capture = this.canvas.toDataURL("image/png");
      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
      this.cameraActive = false;
    },
    savePic: function() {
      axios
        .post("/api/gCloudStore/create", {
          note: this.note,
          photo: this.capture,
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      cameraActive: true,
      video: {},
      canvas: {},
      constraints: {
        video: {
          facingMode: "environment"
        },
        audio: false
      },
      capture: "",
      note: "",
      userID: ""
    };
  },
  mounted() {
    this.video = this.$refs.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        try {
          this.video.srcObject = stream;
        } catch (error) {
          this.video.src = window.URL.createObjectURL(stream);
        }
      });
    }
  }
};
</script>

<style>
video,
canvas,
img {
  width: 480px;
  height: 640px;
}
textarea {
  width: 80%;
}
</style>


