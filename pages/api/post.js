import post from '../../postdata.json'

export default function handler(req, res) {
  res.status(200).json(post)
}
