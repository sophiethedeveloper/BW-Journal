import React, {useState, createContext} from 'react';

export const PostContext = createContext();

export const PostProvider = (props) => {
    const [post, setPost] = useState([
        {
            url: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/06/beneficios-del-mango.jpg',
            title: 'This is my favorite fruit. It is sweet and delicious',
            id: 12345
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/sky+photo+for+website+home+page.jpeg?format=2500w',
            title: 'Sunsets are my favorite. There is nothing better than to enjoy the golden hour! #goals',
            id: 568968
        },
        {
            url: 'https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg',
            title: 'This is my pet bunny, he is the sweetest of them all.',
            id: 968996
        },
    ]);

    return(
        <PostContext.Provider value={[post, setPost]}>
            {props.children}
        </PostContext.Provider>
    )

}