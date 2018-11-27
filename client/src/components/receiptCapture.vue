<template>
  <div id="app">
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
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueFire);
firebase.initializeApp({
  apiKey: "AIzaSyDBCaV7SGrtV0AMLPAnyymNi8BjUPb6zZc",
  authDomain: "expense-6e43c.firebaseapp.com",
  projectId: "expense-6e43c",
  storageBucket: "expense-6e43c.appspot.com",
  messagingSenderId: "361457426189"
});

const player = document.getElementById("player");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

export default {
  methods: {
    takePic() {
      this.canvas = this.$refs.canvas;
      let context = this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, 480, 640);

      this.capture = canvas.toDataURL("image/png");

      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
      this.cameraActive = false;
    },
    savePic() {
      let uploadTask = storeageRef
        .child(imagesRef + "/" + this.myPicRef.name)
        .putString(this.capture, "data_url");
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },
        function(error) {
          switch (error.code) {
            case "storage/unauthorized":
              console.log("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              console.log("User canceled the upload");
              break;
            case "storage/unknown":
              console.log(
                "Unknown error occurred, inspect error.serverResponse"
              );
              break;
          }
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log("File available at", downloadURL);
            this.fileDestination = downloadURL;
          });
        }
      );
    }
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
      },

      storageRef: firebase.storage().ref(),
      imagesRef: storageRef.child("images/user_id"),
      fileName: "someID.png",
      myPicRef: imagesRef.child(this.fileName),
      fileDestination: ""
    };
  },
  mounted() {
    this.video = this.$refs.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
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


