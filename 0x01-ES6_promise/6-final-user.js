import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signupUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((pro) => ({
        status: pro.status,
        value: pro.status === 'fulfilled' ? pro.value : String(pro.reason),
      }))
    ));
}
