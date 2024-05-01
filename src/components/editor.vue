<script setup>
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import {ref} from 'vue'

const content = ref('<p>EDIT NOW !</p>')
const editor = useEditor({
  content: content.value,
  extensions: [StarterKit],
  onUpdate(){
    content.value = this.getHTML()
  }
})
// editor.on('update', ()=>{
//   content.value
// })
console.log(editor)
</script>

<template>
  <div>
    <div>html:</div>
    <div>
      {{ content }}
    </div>
  </div>

<div class="op">
  <button @click="editor.chain().focus().toggleBold().run()">
    Bold
  </button>
  <button @click="editor.chain().focus().toggleCode().run()">
    Code Block
  </button>
  <button @click="editor.chain().focus().toggleStrike().run()">
    Strike
  </button>
</div>
<editor-content :editor="editor" id="editor"></editor-content>

</template>

<style>
.op {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.tiptap {
  height: 600px;
  width: 500px;
  outline: none;
  background-color: #f5f5f5;
  padding: 10px;
  transition: background .5s ease-in;
}

div:not(.op) {
  width: 500px;
}

button {
  font-size: 16px;
  margin-top: 10px;
}

.tiptap:focus {
  background-color: #e5e5e5;
}


</style>