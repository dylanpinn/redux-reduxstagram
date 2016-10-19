// @flow
export type Post = {
  code: string,
  caption: ?string,
  likes: ?number,
  id: string,
  display_src: string,
}

export type Comment = {
  text: string,
  user: string,
}
