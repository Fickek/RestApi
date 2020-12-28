const db = require('../db');

class UserContoller {
    async createUser(req, res) {
        const {
            mail,
            password
        } = req.body;

        let mailPerson = await db.query('SELECT mail from person');
        let arr = [];

        for (let person in mailPerson.rows) {

            if (mailPerson.rows[person].mail === mail) {
                arr.push(mailPerson.rows[person].mail);
            } else {
                continue;
            }
        }

        if (arr[0] === mail) {
            res.sendStatus(404);
        } else {
            console.log('No');
            const newPerson = await db.query('INSERT INTO person (mail, password) values ($1, $2) RETURNING *', [mail, password]);
            res.send();
        }
    }
    // async getUser(req, res) {
    //     const users = await db.query('SELECT * FROM person');
    //     res.json(users.rows);
    // }
    // async getOneUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query('SELECT * FROM person where id = $1', [id]);
    //     res.json(user.rows[0]);
    // }
    // async updateUser(req, res) {
    //     const {
    //         id,
    //         name,
    //         age
    //     } = req.body;
    //     const user = await db.query(
    //         'UPDATE person set name = $1, age = $2 where id = $3 RETURNING *', [name, age, id]
    //     );
    //     res.json(user.rows[0]);
    // }
    // async deleteUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query('DELETE FROM person where id = $1', [id]);
    //     res.json(user.rows[0]);
    // }
}

module.exports = new UserContoller();