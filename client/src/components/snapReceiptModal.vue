<template>
  <div
    class="modal fade"
    id="snapPicture"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Snap Receipt</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <a aria-hidden="true">&times;</a>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <h5>Snap a quick picture of your receipt to save for later</h5>
                <div>
                  <video
                    ref="video"
                    id="video"
                    width="480"
                    height="640"
                    autoplay
                    v-if="cameraActive"
                  ></video>
                  <canvas ref="canvas" id="canvas" width="300" height="300" v-show="!cameraActive"></canvas>
                </div>
                <label for="noteArea">Short Description</label>
                <br>
                <textarea id="noteArea" name="note" rows="3" v-model="description"></textarea>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-success my-2 my-sm-0"
                    id="snap"
                    @click.prevent="takePic()"
                    v-show="cameraActive"
                  >Snap Receipt</button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-success my-2 my-sm-0"
                    id="snap"
                    @click.prevent="savePic()"
                    v-show="!cameraActive"
                    data-dismiss="modal"
                  >Save Receipt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      context.drawImage(this.video, 0, 0, 300, 300);

      this.capture = this.canvas.toDataURL("image/png");
      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
      this.cameraActive = false;
    },
    savePic: function() {
      axios
        .post("/api/transactions/newReceipt", {
          description: this.description,
          image: this.capture
        })
        .then(response => console.log("snapReceipt response" + response))
        .catch(error => console.log("snapReceipt error" + error));
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
      description: "",
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
  width: 300px;
  height: 300px;
}
textarea {
  width: 80%;
}
</style>