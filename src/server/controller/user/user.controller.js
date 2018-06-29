/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */

export const GetUser = (req, res) => {
  res.json({ name: "hello world" });
};
