const publishPhoto = () => {
    bridge
      .send("VKWebAppCallAPIMethod", {
        method: "photos.createAlbum",
        params: {
          title: "ILLUMINATE TEST",
          description: `какой то текст`,
          v: 5.21,
          access_token: userToken,
        },
      })
      .then((r) => {
        console.log("photos.createAlbum res:", r);

        console.log("photos.createAlbum r.response.id:", r.response.id);
        bridge
          .send("VKWebAppCallAPIMethod", {
            method: "photos.getUploadServer",
            params: {
              album_id: r.response.id,
              v: 5.21,
              access_token: userToken,
            },
          })
          .then((res) => {
            console.log("photos.getUploadServer res:", res);

				  let url =
                    "https://cors-anywhere.herokuapp.com/https://sun9-49.userapi.com/impf/c855732/v855732341/215725/RVJstbppzyk.jpg?size=1080x1080&quality=96&sign=0290799ed52f535e5b29b7ab5f500ee0&type=album";
				  await fetch(url).then((r) => {
				     r.blob().then(function(url){
						  let reader = new FileReader();
						  reader.onload = function (e) {
							photo = e.target.result;

							axios({
							  method: "post",
							  url: res.response.upload_url,
							  photo: photo,
							})
							  .then((response) => {
								console.log("ДУРКА axios response", response);
							  })
							  .catch((error) =>
								console.log("ДУРКА axios error", error)
							  );
						  };
						  reader.readAsDataURL(url);
					 });
				  });
          })
          .catch((err) => {
            console.log("photos.getUploadServer err:", err);
          });
      })

      .catch((er) => {
        console.log("photos.createAlbum err:", er);
      });

  };