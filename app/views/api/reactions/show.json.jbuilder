json.set! @reaction.id do
    json.id @reaction.id
    json.authorId @reaction.author_id
    json.reviewId @reaction.review_id
    json.reactionType @reaction.reaction_type
end