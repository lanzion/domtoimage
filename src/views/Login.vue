<template>
  <div class="login">
    <div class="title">LAZY系统登录</div>
    <div class="login_form">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <FormItem
          label="账号"
          prop="name"
        >
          <Input
            v-model="formValidate.name"
            placeholder="请输入账号"
          />
        </FormItem>
        <FormItem
          label="密码"
          prop="pwd"
        >
          <Input
            v-model="formValidate.pwd"
            type="password"
            placeholder="请输入账号"
          />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">登陆</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        pwd: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入账号", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log(this.formValidate);
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  background: #2e3b4b;
  height: 100%;
  .title {
    font-size: 28px;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  .login_form {
    width: 400px;
    margin: 0 auto;
    font-size: 30px;
  }
  /deep/ button {
    width: 100%;
    font-size: 20px;
  }
  /deep/ input {
    font-size: 20px;
  }
  /deep/ .ivu-form-item-label {
    font-size: 20px;
  }
}
</style>