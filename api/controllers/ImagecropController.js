/**
 * ImagecropController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  upload: function (req, res) {

    let jsonObject =req.param("imageCropped");
    let base64Data = jsonObject.value.image.replace(/^data:image\/jpeg;base64,/,"");
    let binaryData = new Buffer(base64Data, 'base64').toString('binary');

    require("fs").writeFile("toto.jpeg", binaryData, "binary", function(err) {
      console.log(err);
    })
  }

};

