#!/bin/bash
set -e

mongo <<EOF
use $DBNAME

db.createUser({
  user:  '$ADMIN_USER',
  pwd: '$ADMIN_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$DBNAME'
  }]
})

db.createUser({
  user:  '$READ_ONLY_USER',
  pwd: '$READ_ONLY_USER_PASSWORD',
  roles: [{
    role: 'read',
    db: '$DBNAME'
  }]
})

EOF
