const getWorldById = (req, res, next) => {
  // hard coded data as example
  res.status(200).send({
    data: [{ id: '1', type: "thing", attributes: { mything: true } }, { id: '2', type: "thing", attributes: { mything: true } }],
    links: { prev: '6', next: '9'}
  });
}

const getWorldByName = (req, res, next) => {
  // hard coded data as example
  res.status(200).send({
    data: [{ id: '1', type: "thing", attributes: { mything: true } }, { id: '2', type: "thing", attributes: { mything: true } }],
    links: { prev: '6', next: '9'}
  });
}

export default {
  getWorldById,
  getWorldByName
};