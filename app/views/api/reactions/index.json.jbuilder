@reactions.each do |reaction|
  json.set! reaction.id do
    json.id reaction.id
    json.authorId reaction.author_id
    json.reviewId reaction.review_id
    json.useful reaction.useful
    json.funny reaction.funny
    json.cool reaction.cool
  end
end