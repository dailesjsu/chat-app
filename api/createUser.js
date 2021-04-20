//this is to create user from chat engine io
//axios library is to help connect to chatenginie io api
import axios from 'axios';

const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post('https://api.chatengine.io/projects/people/',
      { username: userName, secret: userId },
      { headers: { 'Private-Key': process.env.chat_engine_private_key } },
    )
    .then(apiRes => {
      res.json({
        body: apiRes.data,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: 'There was an error creating the user',
      });
    });
};

export default createUser;