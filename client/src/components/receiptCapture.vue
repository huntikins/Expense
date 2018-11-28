<template>
  <div>
    <div>
      <video ref="video" id="video" width="480" height="640" autoplay v-if="cameraActive"></video>
    </div>
    <canvas ref="canvas" id="canvas" width="480" height="640"></canvas>
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
      let context = this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, 480, 640);

      this.capture = canvas.toDataURL("image/png");
      console.log(this.video.src);
      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
      this.cameraActive = false;
    },
    savePic: function() {}
  },
  data() {
    return {
      cameraActive: true,
      video: {},
      canvas: {},
      capture: "",
      constraints: {
        video: {
          facingMode: "environment"
        },
        audio: false
      }
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
</style>


