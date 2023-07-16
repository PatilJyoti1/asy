const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
const addButter = new Promise((resolve, reject) => resolve('butter'));

function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cold drinks');
    }, 2000);
  });
}

async function watchMovie() {
  try {
    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log('husband: anything else, darling?');
    console.log('wife: let\'s go, we are getting late');

    let coldDrinks = await getColdDrinks();

    console.log(`husband: I got some ${coldDrinks} as well`);
    console.log('husband: thank you for the reminder, grins');

    return ticket;
  } catch (error) {
    console.log(error);
  }
}

async function createPost(post) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}

async function deletePost() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const deletedPost = posts.pop();
          resolve(deletedPost);
        } else {
          reject("ERROR: NO POSTS FOUND");
        }
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}

watchMovie()
  .then((ticket) => {
    console.log('Movie is about to start');
    console.log('Enjoy the movie with the ticket:', ticket);
  })
  .catch((error) => {
    console.log(error);
  });
