export interface basicLabelInterface {
  label: string;
}

export interface basicLinkInterface {
  attributes: {
    href: string;
    rel?: string;
    type?: string;
  };
}

export interface authorInterface {
  name: basicLabelInterface;
  uri: basicLabelInterface;
}

export interface imimageInterface extends basicLabelInterface {
  attributes: {
    height: string;
  };
}

export interface impriceInterface extends basicLabelInterface {
  attributes: {
    amount: string;
    currency: string;
  };
}

export interface imcontentType {
  attributes: {
    term: string;
    label: string;
  };
}

export interface entryIdInterface extends basicLabelInterface {
  attributes: {
    'im:id': string;
  };
}

export interface entryArtistInterface extends basicLabelInterface {
  attributes: {
    href: string;
  };
}

export interface entryCategoryInterface {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

export interface imreleaseDateInterface extends basicLabelInterface {
  attributes: basicLabelInterface;
}

export interface podcastInterface {
  'im:name': basicLabelInterface;
  'im:image': imimageInterface[];
  summary: basicLabelInterface;
  'im:price': impriceInterface;
  'im:contentType': imcontentType;
  rights: basicLabelInterface;
  title: basicLabelInterface;
  link: basicLinkInterface;
  id: entryIdInterface;
  'im:artist': entryArtistInterface;
  category: entryCategoryInterface;
  'im:releaseDate': imreleaseDateInterface;
}

export interface podcastsEndpointInterface {
  feed: {
    author: authorInterface;
    entry: podcastInterface[];
    updated: basicLabelInterface;
    rights: basicLabelInterface;
    title: basicLabelInterface;
    icon: basicLabelInterface;
    link: basicLinkInterface[];
    id: basicLabelInterface;
  };
}
