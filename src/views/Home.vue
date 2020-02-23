<template>
  <div class="aa">
    <div
      class="box"
      id="my-node"
    >
      <div class="img"><img
          src="../assets/logo.png"
          alt=""
        ></div>
      <div class="content">
        <div class="title">{{name}}</div>
      </div>
    </div>
    <button @click="domtoimage">下载</button>
  </div>
</template>

<script>
import domtoimage from "dom-to-image";
export default {
  data() {
    return {
      name:'测试测试测试测试'
    };
  },
  methods: {
    domtoimage() {
      let _this = this
      var node = document.getElementById("my-node");
      domtoimage
        .toPng(node)
        .then(function(dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
          var a = document.createElement("a");
          a.setAttribute("href", dataUrl);
          a.setAttribute("download", `${_this.name}.png`);
          a.click();
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.aa {
  padding-top: 100px;
  width: 900px;
  margin: 0 auto;
}
.box {
  width: 900px;
  // margin: 0 auto;
  border: 1px solid #ccc;
  background: #fff;
  .img {
    width: 100px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .content {
    padding-left: 20px;
  }
}
</style>