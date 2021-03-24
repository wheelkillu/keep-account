<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span
          ><Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 20px;
      height: 20px;
      color: darken(#899098, 4 * 6%);
      margin-right: 16px;
    }
  }
}
.createTag {
  background: darken(#ffffff, 4 * 6%);
  color: #f5f5f5;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  :hover {
    color: darken(#ffffff, 46%);
  }
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
