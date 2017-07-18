<template>
	<el-upload
		class="upload-demo"
		:action="url"
		:headers="reqOpts"
		:on-preview="handlePreview"
		:on-remove="handleRemove"
		:file-list="fileList">
		<el-button size="small" type="primary">µã»÷ÉÏ´«</el-button>
	</el-upload>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				url: "http://localhost:8080/api/upload/",
				reqOpts: {
					'headers': {
						'Content-Type': 'multipart/form-data'						
					}
				}
  			};
		},
		methods: {
		    handleRemove(file, fileList) {
		    	console.log(file, fileList);
		    },
		    handlePreview(file) {
	    		console.log(file);
		    }
		}
	}
</script>
