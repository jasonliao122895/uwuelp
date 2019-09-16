
json.set! @review.id do
  json.id @review.id
  json.authorId @review.author_id
  json.businessId @review.business_id
  json.rating @review.rating
  json.body @review.body
end