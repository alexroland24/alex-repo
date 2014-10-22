Colors = new Meteor.Collection("colors");

if (Meteor.is_client) {
  Template.color_list.colors = funnction () {
    return Colord.find({}. (sort: {likes: -i, name: i}});
  );
}  
