bcrypt.genSalt(10, ( err,salt)=> {
          bcrypt.hash(newUser.password, salt, (err,hash)=>{
              if(err) throw err;
              newUser.password = hash;
              newUser.save().then(user =>{
                  res.json({
                      user: {
                          id: user.id,
                          name: user.name
                      }
                  })
              })
          })
      })