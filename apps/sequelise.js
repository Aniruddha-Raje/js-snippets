const Sequelize = require('sequelize');

const run = async() => {

    const sequelize = new Sequelize("orm", "root", "rootroot", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false,
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
    });
    console.log("sequelize connection => ", sequelize);

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    const DataTypes = db.Sequelize.DataTypes;

    db.tutorial = sequelize.define("tutorial", {
        title: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        published: {
        type: Sequelize.BOOLEAN
        }
    });
    db.comment = sequelize.define("comment", {
        name: {
          type: DataTypes.STRING
        },
        text: {
          type: DataTypes.STRING
        }
    });
    db.tag = sequelize.define("tag", {
        name: {
          type: DataTypes.STRING,
        },
    });

    db.tutorial.hasMany(db.comment, { as: "comments" });
    db.comment.belongsTo(db.tutorial, {
        foreignKey: "tutorialId",
        as: "tutorial",
    });
    db.tag.belongsToMany(db.tutorial, {
        through: "tutorial_tag",
        as: "tutorials",
        foreignKey: "tag_id",
    });
    db.tutorial.belongsToMany(db.tag, {
        through: "tutorial_tag",
        as: "tags",
        foreignKey: "tutorial_id",
    });
      

    // const createResponse = await create(db.tutorial);
    // console.log("createResponse => ", createResponse);

    const createCommentResponse = await createComment();
    // console.log("createCommentResponse => ", createCommentResponse);

    const findAllResponse = await findAll(db, db.tutorial);
    console.log("findAll => ", findAllResponse);
}

const create = async(Tutorial) => {
    const tutorial = {
        title: "title 1",
        description: "description 1",
        published: false
    };
    
    createTutorial = Tutorial.create(tutorial)
        .then(data => {
            console.log("success create => ", data);
            return data;
        })
        .catch(err => {
            console.log("err in create => ", err);
    });
}

const createComment = async(Comment) => {
    return Comment.create({
        name: "comment 1",
        text: "comment text 1",
        tutorialId: 1,
      })
    .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
    })
    .catch((err) => {
        console.log(">> Error while creating comment: ", err);
    });
}

const createTag = async(Tag) => {
    return Tag.create({
        name: "Tag 1",
      })
    .then((tag) => {
        console.log(">> Created Tag: " + JSON.stringify(tag, null, 2));
        return tag;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
}

const findTutorialById = async(Tutorial, tutorialId) => {
    return Tutorial.findByPk(tutorialId, { include: ["comments"] })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
}

const findCommentById = async(Comment, commentId) => {
    return Comment.findByPk(commentId, { include: ["tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
}

const findCommentById = async(Comment, commentId) => {
    return Comment.findByPk(commentId, { include: ["tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
}
  
const findAllTutorials = async(db, Tutorial) => {
    const Op = db.Sequelize.Op;

    const title = "title 1";
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    return Tutorial.findAll({ where: condition })
        .then(data => {
            console.log("success findAll => ", data);
            return data;
        })
        .catch(err => {
            console.log("err in findAll => ", err);
    });
}


const findTagById = async (Tag, Tutorial, id) => {
    return Tag.findByPk(id, {
      include: [
        {
          model: Tutorial,
          as: "tutorials",
          attributes: ["id", "title", "description"],
          through: {
            attributes: [],
          }
        },
      ],
    })
    .then((tag) => {
        return tag;
    })
    .catch((err) => {
        console.log(">> Error while finding Tag: ", err);
    });
};

const findAllTags = async(Tag, Tutorial) => {
    return Tag.findAll({
        include: [
          {
            model: Tutorial,
            as: "tutorials",
            attributes: ["id", "title", "description"],
            through: {
              attributes: [],
            }
          },
        ],
      })
    .then((tags) => {
        return tags;
    })
    .catch((err) => {
        console.log(">> Error while retrieving Tags: ", err);
    });
}

run();