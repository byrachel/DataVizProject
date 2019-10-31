/*
 * users controller
 */

var User = require('../models/Users');

var newUser = {

    createUser: (req, res) => {
        var userData = req.body.user;
        var createNewUser = new User ({

            enterprise: userData.enterprise,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            status: userData.status,
            endengagement: userData.endengagement,
            contract: null,
            videocam: []
        }
        );
        createNewUser.save((error) => {
            if(error) {
                res.status(500).json({message: "Oups ! "});
                return;
            }
            res.json({message: "OK"});
        });
    },


}

module.exports = newUser;