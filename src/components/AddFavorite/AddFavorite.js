import React from "react";


export default function AddFavorite(props) {
  return (
    <form class="add-favorite" onSubmit={(e) => props.onSubmit(e)}>
      <input class="input" type="text" name="cityName" placeholder="City name" required={true} />
      <input class="button" type="submit" value="Add to favorite"/>
    </form>
  );
}
