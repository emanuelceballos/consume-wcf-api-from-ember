import Component from '@ember/component';

export default Component.extend({
	actions: {
      showPosts(blogId) {
        Ember.$.ajax({
            url: 'http://localhost:28078/PostService.svc/api/v1/posts?blogId=' + blogId
        }).then(function(resolve) {
            alert(resolve[0].title);
        });
      }
    }
});
