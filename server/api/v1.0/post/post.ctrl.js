export function gets(req, res, next) {
  const posts = [{ // dummy data
    'id': '1',
    'title': 'My first post!',
    'author': {
      'id': '123',
      'name': 'Paul'
    },
    'comments': [{
      'id': '249',
      'content': 'Nice post!',
      'commenter': {
        'id': '245',
        'name': 'Jane'
      }
    },
    {
      'id': '250',
      'content': 'Thanks~*',
      'commenter': {
        'id': '123',
        'name': 'Paul'
      }
    }]
  }, 
  {
    'id': '2',
    'title': 'This other post!',
    'author': {
      'id': '123',
      'name': 'Paul'
    },
    'comments': [{
      'id': '251',
      'content': 'Your other post was nicer.',
      'commenter': {
        'id': '245',
        'name': 'Jane'
      }
    },
    {
      'id': '252',
      'content': 'I am a spammer!',
      'commenter': {
        'id': '246',
        'name': 'Spambot5000'
      }
    }]
  }];

  console.log('Post ctrl:', 'successfully recieved a request for post list.');

  res.json(posts);
};