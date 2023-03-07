const { 
    db, 
    Auth, 
    googleProvider,
    collection,
    addDoc,
    where,
    query,
    getDocs,
    createUserWithEmailAndPassword 
} = require('../database/firebase')

module.exports = {
    async getUsers(req, res) {
        
        const user = query(collection(db, 'users'));
        const getAll = await getDocs(user);
        if (getAll.empty) {
            res.status(400).json({ 
                success: false, 
                message: 'Failed, theres no data to catch',
            });
        }
        getAll.forEach(data => {
            res.status(201).json({ 
                success: true, 
                message: 'Success',
                data: data.data()
            });
        });
    },
    async getUsersByID(req, res) {
        let id = req.params.id;
        const user = query(collection(db, 'users'), where('uid', '==', id));
        const getUserById = await getDocs(user);
        if (getUserById.empty) {
            res.json({
                success: false,
                message: `Failed, no data with id: ${id}`
            });
        } 
        getUserById.forEach(data => {
            res.status(201).json({
                success: true,
                message: 'Success',
                data: data.data()
            });
        });
    },
    async addUsers(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            authProvider: 'local/email'
        }
        try {
            const reg = await createUserWithEmailAndPassword(
                Auth, data.email, data.password
            );
            const dataUser = reg.user;
            await addDoc(collection(db, "users"), {
                uid: dataUser.uid,
                name: data.name,
                email: data.email,
                authProvider: data.authProvider
            }).then(
                res.json({
                    success: true,
                    message: 'Success',
                    data: data
                })
            );
        } catch (err) {
            res.json({
                success: false,
                message: `Theres something wrong, error: ${err}`
            })
        };
    },
}