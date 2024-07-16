import  createClient  from './sanity';

let sanityQuery = (query, params) => createClient.fetch(query, params);

export const getFeaturedRestaurants = ()=>{
    return sanityQuery(`
        *[_type=='featured']{
                ...,
                restaurant[]->{
                   ...,
                   dishes[]->{
                     ...
                    },
                      type->{
                        name
                    }
           }
        }   
    `)
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type=='category']
    `)
}

export const getFeaturedReastaurantById = id=>{
    return sanityQuery(`
        *[_type=='featured' && _id == $id]{
            ...,
            restaurant[]->{
                ...,
                dishes[]->,
                 type->{
                    name
                }
            }
        }[0]`, {id})
        
}

