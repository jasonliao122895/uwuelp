@reviews.each do |review|
  if current_user
   current_user_reaction = current_user.reactions.select { |reaction| reaction.author_id == current_user.id && review.id == reaction.review_id }
  end
  num_useful = review.reactions.select { |reaction| reaction.useful == true }.count
  num_funny = review.reactions.select { |reaction| reaction.funny == true }.count
  num_cool = review.reactions.select { |reaction| reaction.cool == true }.count
  json.set! review.id do
    json.id review.id
    json.rating review.rating
    json.body review.body
    json.authorId review.author_id
    json.authorFirst review.author.first_name.capitalize
    json.authorLast review.author.last_name[0].capitalize
    json.authorLocation review.author.city + ", " + review.author.state
    json.authorPic url_for(review.author.prof_pic)
    json.authorNumReviews review.author.reviews.length
    json.businessId review.business_id
    json.createAt review.created_at
    json.currentUserReaction current_user_reaction
    json.numUseful num_useful
    json.numFunny num_funny
    json.numCool num_cool
    json.numReacts review.reactions
  end
end