@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.rating review.rating
    json.body review.body
    json.authorId review.author_id
    json.authorFirst review.author.first_name.capitalize
    json.authorLast review.author.last_name[0].capitalize
    json.authorPic url_for(review.author.prof_pic)
    json.authorNumReviews review.author.reviews.length
    json.businessId review.business_id
    json.createAt review.created_at
  end
end