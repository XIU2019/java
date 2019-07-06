<template>
  <el-form ref="form" :model="form" label-width="80px" style="margin:20px;width:60%;min-width:600px;">
    <el-form-item label="文章标题">
      <el-input v-model="form.title" ></el-input>
    </el-form-item>
    <el-form-item label="作者" :span="11" >
      <el-input v-model="form.susername" ></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <div >
        <el-tag style="float: left"
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input style="float: left"
          class="input-new-tag"
          v-if="inputVisible"
          v-model="label"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
    </el-form-item>
    <el-form-item label="发布时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
<!--    -->
    <el-form-item label="内容" >
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="form.content">
      </el-input>
    </el-form-item>
    <!--上传图片-->
    <el-form-item label="上传图片">
    <el-upload style="float: left"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
      </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即发布</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "PlayArticles",
    data() {
      return {
        form: {
          title: '',
          susername:'',
          label: '',
          time: '',
          connect:'',

          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //标签数据
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        //上传数据
        fileList:
          {name: '',
          url: '',
          }

      }
    },
    methods: {
      //提交
      onSubmit() {
        console.log('submit!');
      },
      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      //上传
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    //  标签方法
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
