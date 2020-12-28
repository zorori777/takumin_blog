export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAbout = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  mediumUser?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<Maybe<ContentfulSocialLink>>>;
  profile?: Maybe<ContentfulAsset>;
  projects?: Maybe<Array<Maybe<ContentfulProject>>>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAboutSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
};


export type ContentfulAboutCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAboutUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutMeTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  aboutMe?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAboutAboutMeTextNodeSys>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAboutAboutMeTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutAboutMeTextNodeGroupConnection>;
};


export type ContentfulAboutAboutMeTextNodeConnectionDistinctArgs = {
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};


export type ContentfulAboutAboutMeTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};

export type ContentfulAboutAboutMeTextNodeEdge = {
  next?: Maybe<ContentfulAboutAboutMeTextNode>;
  node: ContentfulAboutAboutMeTextNode;
  previous?: Maybe<ContentfulAboutAboutMeTextNode>;
};

export type ContentfulAboutAboutMeTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'aboutMe'
  | 'sys___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulAboutAboutMeTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutMe?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutAboutMeTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAboutAboutMeTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutMeTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutAboutMeTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutAboutMeTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutMeTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutGroupConnection>;
};


export type ContentfulAboutConnectionDistinctArgs = {
  field: ContentfulAboutFieldsEnum;
};


export type ContentfulAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutFieldsEnum;
};

export type ContentfulAboutEdge = {
  next?: Maybe<ContentfulAbout>;
  node: ContentfulAbout;
  previous?: Maybe<ContentfulAbout>;
};

export type ContentfulAboutFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'description'
  | 'roles'
  | 'mediumUser'
  | 'socialLinks'
  | 'socialLinks___contentful_id'
  | 'socialLinks___id'
  | 'socialLinks___node_locale'
  | 'socialLinks___name'
  | 'socialLinks___url'
  | 'socialLinks___fontAwesomeIcon'
  | 'socialLinks___about'
  | 'socialLinks___about___contentful_id'
  | 'socialLinks___about___id'
  | 'socialLinks___about___node_locale'
  | 'socialLinks___about___name'
  | 'socialLinks___about___description'
  | 'socialLinks___about___roles'
  | 'socialLinks___about___mediumUser'
  | 'socialLinks___about___socialLinks'
  | 'socialLinks___about___socialLinks___contentful_id'
  | 'socialLinks___about___socialLinks___id'
  | 'socialLinks___about___socialLinks___node_locale'
  | 'socialLinks___about___socialLinks___name'
  | 'socialLinks___about___socialLinks___url'
  | 'socialLinks___about___socialLinks___fontAwesomeIcon'
  | 'socialLinks___about___socialLinks___about'
  | 'socialLinks___about___socialLinks___spaceId'
  | 'socialLinks___about___socialLinks___createdAt'
  | 'socialLinks___about___socialLinks___updatedAt'
  | 'socialLinks___about___socialLinks___children'
  | 'socialLinks___about___profile___contentful_id'
  | 'socialLinks___about___profile___id'
  | 'socialLinks___about___profile___spaceId'
  | 'socialLinks___about___profile___createdAt'
  | 'socialLinks___about___profile___updatedAt'
  | 'socialLinks___about___profile___title'
  | 'socialLinks___about___profile___description'
  | 'socialLinks___about___profile___node_locale'
  | 'socialLinks___about___profile___children'
  | 'socialLinks___about___projects'
  | 'socialLinks___about___projects___contentful_id'
  | 'socialLinks___about___projects___id'
  | 'socialLinks___about___projects___node_locale'
  | 'socialLinks___about___projects___name'
  | 'socialLinks___about___projects___publishedDate'
  | 'socialLinks___about___projects___repositoryUrl'
  | 'socialLinks___about___projects___description'
  | 'socialLinks___about___projects___projectUrl'
  | 'socialLinks___about___projects___type'
  | 'socialLinks___about___projects___about'
  | 'socialLinks___about___projects___spaceId'
  | 'socialLinks___about___projects___createdAt'
  | 'socialLinks___about___projects___updatedAt'
  | 'socialLinks___about___projects___children'
  | 'socialLinks___about___aboutMe___id'
  | 'socialLinks___about___aboutMe___children'
  | 'socialLinks___about___aboutMe___aboutMe'
  | 'socialLinks___about___spaceId'
  | 'socialLinks___about___createdAt'
  | 'socialLinks___about___updatedAt'
  | 'socialLinks___about___sys___type'
  | 'socialLinks___about___sys___revision'
  | 'socialLinks___about___parent___id'
  | 'socialLinks___about___parent___children'
  | 'socialLinks___about___children'
  | 'socialLinks___about___children___id'
  | 'socialLinks___about___children___children'
  | 'socialLinks___about___internal___content'
  | 'socialLinks___about___internal___contentDigest'
  | 'socialLinks___about___internal___description'
  | 'socialLinks___about___internal___fieldOwners'
  | 'socialLinks___about___internal___ignoreType'
  | 'socialLinks___about___internal___mediaType'
  | 'socialLinks___about___internal___owner'
  | 'socialLinks___about___internal___type'
  | 'socialLinks___about___childContentfulAboutAboutMeTextNode___id'
  | 'socialLinks___about___childContentfulAboutAboutMeTextNode___children'
  | 'socialLinks___about___childContentfulAboutAboutMeTextNode___aboutMe'
  | 'socialLinks___spaceId'
  | 'socialLinks___createdAt'
  | 'socialLinks___updatedAt'
  | 'socialLinks___sys___type'
  | 'socialLinks___sys___revision'
  | 'socialLinks___parent___id'
  | 'socialLinks___parent___parent___id'
  | 'socialLinks___parent___parent___children'
  | 'socialLinks___parent___children'
  | 'socialLinks___parent___children___id'
  | 'socialLinks___parent___children___children'
  | 'socialLinks___parent___internal___content'
  | 'socialLinks___parent___internal___contentDigest'
  | 'socialLinks___parent___internal___description'
  | 'socialLinks___parent___internal___fieldOwners'
  | 'socialLinks___parent___internal___ignoreType'
  | 'socialLinks___parent___internal___mediaType'
  | 'socialLinks___parent___internal___owner'
  | 'socialLinks___parent___internal___type'
  | 'socialLinks___children'
  | 'socialLinks___children___id'
  | 'socialLinks___children___parent___id'
  | 'socialLinks___children___parent___children'
  | 'socialLinks___children___children'
  | 'socialLinks___children___children___id'
  | 'socialLinks___children___children___children'
  | 'socialLinks___children___internal___content'
  | 'socialLinks___children___internal___contentDigest'
  | 'socialLinks___children___internal___description'
  | 'socialLinks___children___internal___fieldOwners'
  | 'socialLinks___children___internal___ignoreType'
  | 'socialLinks___children___internal___mediaType'
  | 'socialLinks___children___internal___owner'
  | 'socialLinks___children___internal___type'
  | 'socialLinks___internal___content'
  | 'socialLinks___internal___contentDigest'
  | 'socialLinks___internal___description'
  | 'socialLinks___internal___fieldOwners'
  | 'socialLinks___internal___ignoreType'
  | 'socialLinks___internal___mediaType'
  | 'socialLinks___internal___owner'
  | 'socialLinks___internal___type'
  | 'profile___contentful_id'
  | 'profile___id'
  | 'profile___spaceId'
  | 'profile___createdAt'
  | 'profile___updatedAt'
  | 'profile___file___url'
  | 'profile___file___details___size'
  | 'profile___file___fileName'
  | 'profile___file___contentType'
  | 'profile___title'
  | 'profile___description'
  | 'profile___node_locale'
  | 'profile___sys___type'
  | 'profile___sys___revision'
  | 'profile___fixed___base64'
  | 'profile___fixed___tracedSVG'
  | 'profile___fixed___aspectRatio'
  | 'profile___fixed___width'
  | 'profile___fixed___height'
  | 'profile___fixed___src'
  | 'profile___fixed___srcSet'
  | 'profile___fixed___srcWebp'
  | 'profile___fixed___srcSetWebp'
  | 'profile___resolutions___base64'
  | 'profile___resolutions___tracedSVG'
  | 'profile___resolutions___aspectRatio'
  | 'profile___resolutions___width'
  | 'profile___resolutions___height'
  | 'profile___resolutions___src'
  | 'profile___resolutions___srcSet'
  | 'profile___resolutions___srcWebp'
  | 'profile___resolutions___srcSetWebp'
  | 'profile___fluid___base64'
  | 'profile___fluid___tracedSVG'
  | 'profile___fluid___aspectRatio'
  | 'profile___fluid___src'
  | 'profile___fluid___srcSet'
  | 'profile___fluid___srcWebp'
  | 'profile___fluid___srcSetWebp'
  | 'profile___fluid___sizes'
  | 'profile___sizes___base64'
  | 'profile___sizes___tracedSVG'
  | 'profile___sizes___aspectRatio'
  | 'profile___sizes___src'
  | 'profile___sizes___srcSet'
  | 'profile___sizes___srcWebp'
  | 'profile___sizes___srcSetWebp'
  | 'profile___sizes___sizes'
  | 'profile___resize___base64'
  | 'profile___resize___tracedSVG'
  | 'profile___resize___src'
  | 'profile___resize___width'
  | 'profile___resize___height'
  | 'profile___resize___aspectRatio'
  | 'profile___parent___id'
  | 'profile___parent___parent___id'
  | 'profile___parent___parent___children'
  | 'profile___parent___children'
  | 'profile___parent___children___id'
  | 'profile___parent___children___children'
  | 'profile___parent___internal___content'
  | 'profile___parent___internal___contentDigest'
  | 'profile___parent___internal___description'
  | 'profile___parent___internal___fieldOwners'
  | 'profile___parent___internal___ignoreType'
  | 'profile___parent___internal___mediaType'
  | 'profile___parent___internal___owner'
  | 'profile___parent___internal___type'
  | 'profile___children'
  | 'profile___children___id'
  | 'profile___children___parent___id'
  | 'profile___children___parent___children'
  | 'profile___children___children'
  | 'profile___children___children___id'
  | 'profile___children___children___children'
  | 'profile___children___internal___content'
  | 'profile___children___internal___contentDigest'
  | 'profile___children___internal___description'
  | 'profile___children___internal___fieldOwners'
  | 'profile___children___internal___ignoreType'
  | 'profile___children___internal___mediaType'
  | 'profile___children___internal___owner'
  | 'profile___children___internal___type'
  | 'profile___internal___content'
  | 'profile___internal___contentDigest'
  | 'profile___internal___description'
  | 'profile___internal___fieldOwners'
  | 'profile___internal___ignoreType'
  | 'profile___internal___mediaType'
  | 'profile___internal___owner'
  | 'profile___internal___type'
  | 'projects'
  | 'projects___contentful_id'
  | 'projects___id'
  | 'projects___node_locale'
  | 'projects___name'
  | 'projects___publishedDate'
  | 'projects___repositoryUrl'
  | 'projects___description'
  | 'projects___projectUrl'
  | 'projects___type'
  | 'projects___logo___contentful_id'
  | 'projects___logo___id'
  | 'projects___logo___spaceId'
  | 'projects___logo___createdAt'
  | 'projects___logo___updatedAt'
  | 'projects___logo___file___url'
  | 'projects___logo___file___fileName'
  | 'projects___logo___file___contentType'
  | 'projects___logo___title'
  | 'projects___logo___description'
  | 'projects___logo___node_locale'
  | 'projects___logo___sys___type'
  | 'projects___logo___sys___revision'
  | 'projects___logo___fixed___base64'
  | 'projects___logo___fixed___tracedSVG'
  | 'projects___logo___fixed___aspectRatio'
  | 'projects___logo___fixed___width'
  | 'projects___logo___fixed___height'
  | 'projects___logo___fixed___src'
  | 'projects___logo___fixed___srcSet'
  | 'projects___logo___fixed___srcWebp'
  | 'projects___logo___fixed___srcSetWebp'
  | 'projects___logo___resolutions___base64'
  | 'projects___logo___resolutions___tracedSVG'
  | 'projects___logo___resolutions___aspectRatio'
  | 'projects___logo___resolutions___width'
  | 'projects___logo___resolutions___height'
  | 'projects___logo___resolutions___src'
  | 'projects___logo___resolutions___srcSet'
  | 'projects___logo___resolutions___srcWebp'
  | 'projects___logo___resolutions___srcSetWebp'
  | 'projects___logo___fluid___base64'
  | 'projects___logo___fluid___tracedSVG'
  | 'projects___logo___fluid___aspectRatio'
  | 'projects___logo___fluid___src'
  | 'projects___logo___fluid___srcSet'
  | 'projects___logo___fluid___srcWebp'
  | 'projects___logo___fluid___srcSetWebp'
  | 'projects___logo___fluid___sizes'
  | 'projects___logo___sizes___base64'
  | 'projects___logo___sizes___tracedSVG'
  | 'projects___logo___sizes___aspectRatio'
  | 'projects___logo___sizes___src'
  | 'projects___logo___sizes___srcSet'
  | 'projects___logo___sizes___srcWebp'
  | 'projects___logo___sizes___srcSetWebp'
  | 'projects___logo___sizes___sizes'
  | 'projects___logo___resize___base64'
  | 'projects___logo___resize___tracedSVG'
  | 'projects___logo___resize___src'
  | 'projects___logo___resize___width'
  | 'projects___logo___resize___height'
  | 'projects___logo___resize___aspectRatio'
  | 'projects___logo___parent___id'
  | 'projects___logo___parent___children'
  | 'projects___logo___children'
  | 'projects___logo___children___id'
  | 'projects___logo___children___children'
  | 'projects___logo___internal___content'
  | 'projects___logo___internal___contentDigest'
  | 'projects___logo___internal___description'
  | 'projects___logo___internal___fieldOwners'
  | 'projects___logo___internal___ignoreType'
  | 'projects___logo___internal___mediaType'
  | 'projects___logo___internal___owner'
  | 'projects___logo___internal___type'
  | 'projects___about'
  | 'projects___about___contentful_id'
  | 'projects___about___id'
  | 'projects___about___node_locale'
  | 'projects___about___name'
  | 'projects___about___description'
  | 'projects___about___roles'
  | 'projects___about___mediumUser'
  | 'projects___about___socialLinks'
  | 'projects___about___socialLinks___contentful_id'
  | 'projects___about___socialLinks___id'
  | 'projects___about___socialLinks___node_locale'
  | 'projects___about___socialLinks___name'
  | 'projects___about___socialLinks___url'
  | 'projects___about___socialLinks___fontAwesomeIcon'
  | 'projects___about___socialLinks___about'
  | 'projects___about___socialLinks___spaceId'
  | 'projects___about___socialLinks___createdAt'
  | 'projects___about___socialLinks___updatedAt'
  | 'projects___about___socialLinks___children'
  | 'projects___about___profile___contentful_id'
  | 'projects___about___profile___id'
  | 'projects___about___profile___spaceId'
  | 'projects___about___profile___createdAt'
  | 'projects___about___profile___updatedAt'
  | 'projects___about___profile___title'
  | 'projects___about___profile___description'
  | 'projects___about___profile___node_locale'
  | 'projects___about___profile___children'
  | 'projects___about___projects'
  | 'projects___about___projects___contentful_id'
  | 'projects___about___projects___id'
  | 'projects___about___projects___node_locale'
  | 'projects___about___projects___name'
  | 'projects___about___projects___publishedDate'
  | 'projects___about___projects___repositoryUrl'
  | 'projects___about___projects___description'
  | 'projects___about___projects___projectUrl'
  | 'projects___about___projects___type'
  | 'projects___about___projects___about'
  | 'projects___about___projects___spaceId'
  | 'projects___about___projects___createdAt'
  | 'projects___about___projects___updatedAt'
  | 'projects___about___projects___children'
  | 'projects___about___aboutMe___id'
  | 'projects___about___aboutMe___children'
  | 'projects___about___aboutMe___aboutMe'
  | 'projects___about___spaceId'
  | 'projects___about___createdAt'
  | 'projects___about___updatedAt'
  | 'projects___about___sys___type'
  | 'projects___about___sys___revision'
  | 'projects___about___parent___id'
  | 'projects___about___parent___children'
  | 'projects___about___children'
  | 'projects___about___children___id'
  | 'projects___about___children___children'
  | 'projects___about___internal___content'
  | 'projects___about___internal___contentDigest'
  | 'projects___about___internal___description'
  | 'projects___about___internal___fieldOwners'
  | 'projects___about___internal___ignoreType'
  | 'projects___about___internal___mediaType'
  | 'projects___about___internal___owner'
  | 'projects___about___internal___type'
  | 'projects___about___childContentfulAboutAboutMeTextNode___id'
  | 'projects___about___childContentfulAboutAboutMeTextNode___children'
  | 'projects___about___childContentfulAboutAboutMeTextNode___aboutMe'
  | 'projects___spaceId'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___sys___type'
  | 'projects___sys___revision'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | 'aboutMe___id'
  | 'aboutMe___parent___id'
  | 'aboutMe___parent___parent___id'
  | 'aboutMe___parent___parent___children'
  | 'aboutMe___parent___children'
  | 'aboutMe___parent___children___id'
  | 'aboutMe___parent___children___children'
  | 'aboutMe___parent___internal___content'
  | 'aboutMe___parent___internal___contentDigest'
  | 'aboutMe___parent___internal___description'
  | 'aboutMe___parent___internal___fieldOwners'
  | 'aboutMe___parent___internal___ignoreType'
  | 'aboutMe___parent___internal___mediaType'
  | 'aboutMe___parent___internal___owner'
  | 'aboutMe___parent___internal___type'
  | 'aboutMe___children'
  | 'aboutMe___children___id'
  | 'aboutMe___children___parent___id'
  | 'aboutMe___children___parent___children'
  | 'aboutMe___children___children'
  | 'aboutMe___children___children___id'
  | 'aboutMe___children___children___children'
  | 'aboutMe___children___internal___content'
  | 'aboutMe___children___internal___contentDigest'
  | 'aboutMe___children___internal___description'
  | 'aboutMe___children___internal___fieldOwners'
  | 'aboutMe___children___internal___ignoreType'
  | 'aboutMe___children___internal___mediaType'
  | 'aboutMe___children___internal___owner'
  | 'aboutMe___children___internal___type'
  | 'aboutMe___internal___content'
  | 'aboutMe___internal___contentDigest'
  | 'aboutMe___internal___description'
  | 'aboutMe___internal___fieldOwners'
  | 'aboutMe___internal___ignoreType'
  | 'aboutMe___internal___mediaType'
  | 'aboutMe___internal___owner'
  | 'aboutMe___internal___type'
  | 'aboutMe___aboutMe'
  | 'aboutMe___sys___type'
  | 'aboutMe___childMarkdownRemark___id'
  | 'aboutMe___childMarkdownRemark___frontmatter___title'
  | 'aboutMe___childMarkdownRemark___excerpt'
  | 'aboutMe___childMarkdownRemark___rawMarkdownBody'
  | 'aboutMe___childMarkdownRemark___html'
  | 'aboutMe___childMarkdownRemark___htmlAst'
  | 'aboutMe___childMarkdownRemark___excerptAst'
  | 'aboutMe___childMarkdownRemark___headings'
  | 'aboutMe___childMarkdownRemark___headings___id'
  | 'aboutMe___childMarkdownRemark___headings___value'
  | 'aboutMe___childMarkdownRemark___headings___depth'
  | 'aboutMe___childMarkdownRemark___timeToRead'
  | 'aboutMe___childMarkdownRemark___tableOfContents'
  | 'aboutMe___childMarkdownRemark___wordCount___paragraphs'
  | 'aboutMe___childMarkdownRemark___wordCount___sentences'
  | 'aboutMe___childMarkdownRemark___wordCount___words'
  | 'aboutMe___childMarkdownRemark___parent___id'
  | 'aboutMe___childMarkdownRemark___parent___children'
  | 'aboutMe___childMarkdownRemark___children'
  | 'aboutMe___childMarkdownRemark___children___id'
  | 'aboutMe___childMarkdownRemark___children___children'
  | 'aboutMe___childMarkdownRemark___internal___content'
  | 'aboutMe___childMarkdownRemark___internal___contentDigest'
  | 'aboutMe___childMarkdownRemark___internal___description'
  | 'aboutMe___childMarkdownRemark___internal___fieldOwners'
  | 'aboutMe___childMarkdownRemark___internal___ignoreType'
  | 'aboutMe___childMarkdownRemark___internal___mediaType'
  | 'aboutMe___childMarkdownRemark___internal___owner'
  | 'aboutMe___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulAboutAboutMeTextNode___id'
  | 'childContentfulAboutAboutMeTextNode___parent___id'
  | 'childContentfulAboutAboutMeTextNode___parent___parent___id'
  | 'childContentfulAboutAboutMeTextNode___parent___parent___children'
  | 'childContentfulAboutAboutMeTextNode___parent___children'
  | 'childContentfulAboutAboutMeTextNode___parent___children___id'
  | 'childContentfulAboutAboutMeTextNode___parent___children___children'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___content'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___contentDigest'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___description'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___fieldOwners'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___ignoreType'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___mediaType'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___owner'
  | 'childContentfulAboutAboutMeTextNode___parent___internal___type'
  | 'childContentfulAboutAboutMeTextNode___children'
  | 'childContentfulAboutAboutMeTextNode___children___id'
  | 'childContentfulAboutAboutMeTextNode___children___parent___id'
  | 'childContentfulAboutAboutMeTextNode___children___parent___children'
  | 'childContentfulAboutAboutMeTextNode___children___children'
  | 'childContentfulAboutAboutMeTextNode___children___children___id'
  | 'childContentfulAboutAboutMeTextNode___children___children___children'
  | 'childContentfulAboutAboutMeTextNode___children___internal___content'
  | 'childContentfulAboutAboutMeTextNode___children___internal___contentDigest'
  | 'childContentfulAboutAboutMeTextNode___children___internal___description'
  | 'childContentfulAboutAboutMeTextNode___children___internal___fieldOwners'
  | 'childContentfulAboutAboutMeTextNode___children___internal___ignoreType'
  | 'childContentfulAboutAboutMeTextNode___children___internal___mediaType'
  | 'childContentfulAboutAboutMeTextNode___children___internal___owner'
  | 'childContentfulAboutAboutMeTextNode___children___internal___type'
  | 'childContentfulAboutAboutMeTextNode___internal___content'
  | 'childContentfulAboutAboutMeTextNode___internal___contentDigest'
  | 'childContentfulAboutAboutMeTextNode___internal___description'
  | 'childContentfulAboutAboutMeTextNode___internal___fieldOwners'
  | 'childContentfulAboutAboutMeTextNode___internal___ignoreType'
  | 'childContentfulAboutAboutMeTextNode___internal___mediaType'
  | 'childContentfulAboutAboutMeTextNode___internal___owner'
  | 'childContentfulAboutAboutMeTextNode___internal___type'
  | 'childContentfulAboutAboutMeTextNode___aboutMe'
  | 'childContentfulAboutAboutMeTextNode___sys___type'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___id'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___html'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___id'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___children'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___type';

export type ContentfulAboutFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<StringQueryOperatorInput>;
  mediumUser?: Maybe<StringQueryOperatorInput>;
  socialLinks?: Maybe<ContentfulSocialLinkFilterListInput>;
  profile?: Maybe<ContentfulAssetFilterInput>;
  projects?: Maybe<ContentfulProjectFilterListInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
};

export type ContentfulAboutFilterListInput = {
  elemMatch?: Maybe<ContentfulAboutFilterInput>;
};

export type ContentfulAboutGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAboutSysContentType>;
};

export type ContentfulAboutSysContentType = {
  sys?: Maybe<ContentfulAboutSysContentTypeSys>;
};

export type ContentfulAboutSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAboutSysContentTypeSysFilterInput>;
};

export type ContentfulAboutSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAboutSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAboutSysContentTypeFilterInput>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<ContentfulPerson>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSys>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'sys___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostBodyTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSys>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  node: ContentfulBlogPostDescriptionTextNode;
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>;
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'sys___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'tags'
  | 'author___contentful_id'
  | 'author___id'
  | 'author___node_locale'
  | 'author___name'
  | 'author___title'
  | 'author___company'
  | 'author___email'
  | 'author___phone'
  | 'author___facebook'
  | 'author___twitter'
  | 'author___github'
  | 'author___blog_post'
  | 'author___blog_post___contentful_id'
  | 'author___blog_post___id'
  | 'author___blog_post___node_locale'
  | 'author___blog_post___title'
  | 'author___blog_post___slug'
  | 'author___blog_post___publishDate'
  | 'author___blog_post___tags'
  | 'author___blog_post___author___contentful_id'
  | 'author___blog_post___author___id'
  | 'author___blog_post___author___node_locale'
  | 'author___blog_post___author___name'
  | 'author___blog_post___author___title'
  | 'author___blog_post___author___company'
  | 'author___blog_post___author___email'
  | 'author___blog_post___author___phone'
  | 'author___blog_post___author___facebook'
  | 'author___blog_post___author___twitter'
  | 'author___blog_post___author___github'
  | 'author___blog_post___author___blog_post'
  | 'author___blog_post___author___spaceId'
  | 'author___blog_post___author___createdAt'
  | 'author___blog_post___author___updatedAt'
  | 'author___blog_post___author___children'
  | 'author___blog_post___description___id'
  | 'author___blog_post___description___children'
  | 'author___blog_post___description___description'
  | 'author___blog_post___body___id'
  | 'author___blog_post___body___children'
  | 'author___blog_post___body___body'
  | 'author___blog_post___spaceId'
  | 'author___blog_post___createdAt'
  | 'author___blog_post___updatedAt'
  | 'author___blog_post___sys___type'
  | 'author___blog_post___sys___revision'
  | 'author___blog_post___parent___id'
  | 'author___blog_post___parent___children'
  | 'author___blog_post___children'
  | 'author___blog_post___children___id'
  | 'author___blog_post___children___children'
  | 'author___blog_post___internal___content'
  | 'author___blog_post___internal___contentDigest'
  | 'author___blog_post___internal___description'
  | 'author___blog_post___internal___fieldOwners'
  | 'author___blog_post___internal___ignoreType'
  | 'author___blog_post___internal___mediaType'
  | 'author___blog_post___internal___owner'
  | 'author___blog_post___internal___type'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___id'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___children'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___description'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___id'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___children'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___body'
  | 'author___shortBio___id'
  | 'author___shortBio___parent___id'
  | 'author___shortBio___parent___children'
  | 'author___shortBio___children'
  | 'author___shortBio___children___id'
  | 'author___shortBio___children___children'
  | 'author___shortBio___internal___content'
  | 'author___shortBio___internal___contentDigest'
  | 'author___shortBio___internal___description'
  | 'author___shortBio___internal___fieldOwners'
  | 'author___shortBio___internal___ignoreType'
  | 'author___shortBio___internal___mediaType'
  | 'author___shortBio___internal___owner'
  | 'author___shortBio___internal___type'
  | 'author___shortBio___shortBio'
  | 'author___shortBio___sys___type'
  | 'author___shortBio___childMarkdownRemark___id'
  | 'author___shortBio___childMarkdownRemark___excerpt'
  | 'author___shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'author___shortBio___childMarkdownRemark___html'
  | 'author___shortBio___childMarkdownRemark___htmlAst'
  | 'author___shortBio___childMarkdownRemark___excerptAst'
  | 'author___shortBio___childMarkdownRemark___headings'
  | 'author___shortBio___childMarkdownRemark___timeToRead'
  | 'author___shortBio___childMarkdownRemark___tableOfContents'
  | 'author___shortBio___childMarkdownRemark___children'
  | 'author___spaceId'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___type'
  | 'author___sys___revision'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___childContentfulPersonShortBioTextNode___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___children'
  | 'author___childContentfulPersonShortBioTextNode___children'
  | 'author___childContentfulPersonShortBioTextNode___children___id'
  | 'author___childContentfulPersonShortBioTextNode___children___children'
  | 'author___childContentfulPersonShortBioTextNode___internal___content'
  | 'author___childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'author___childContentfulPersonShortBioTextNode___internal___description'
  | 'author___childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'author___childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'author___childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'author___childContentfulPersonShortBioTextNode___internal___owner'
  | 'author___childContentfulPersonShortBioTextNode___internal___type'
  | 'author___childContentfulPersonShortBioTextNode___shortBio'
  | 'author___childContentfulPersonShortBioTextNode___sys___type'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___sys___type'
  | 'description___childMarkdownRemark___id'
  | 'description___childMarkdownRemark___frontmatter___title'
  | 'description___childMarkdownRemark___excerpt'
  | 'description___childMarkdownRemark___rawMarkdownBody'
  | 'description___childMarkdownRemark___html'
  | 'description___childMarkdownRemark___htmlAst'
  | 'description___childMarkdownRemark___excerptAst'
  | 'description___childMarkdownRemark___headings'
  | 'description___childMarkdownRemark___headings___id'
  | 'description___childMarkdownRemark___headings___value'
  | 'description___childMarkdownRemark___headings___depth'
  | 'description___childMarkdownRemark___timeToRead'
  | 'description___childMarkdownRemark___tableOfContents'
  | 'description___childMarkdownRemark___wordCount___paragraphs'
  | 'description___childMarkdownRemark___wordCount___sentences'
  | 'description___childMarkdownRemark___wordCount___words'
  | 'description___childMarkdownRemark___parent___id'
  | 'description___childMarkdownRemark___parent___children'
  | 'description___childMarkdownRemark___children'
  | 'description___childMarkdownRemark___children___id'
  | 'description___childMarkdownRemark___children___children'
  | 'description___childMarkdownRemark___internal___content'
  | 'description___childMarkdownRemark___internal___contentDigest'
  | 'description___childMarkdownRemark___internal___description'
  | 'description___childMarkdownRemark___internal___fieldOwners'
  | 'description___childMarkdownRemark___internal___ignoreType'
  | 'description___childMarkdownRemark___internal___mediaType'
  | 'description___childMarkdownRemark___internal___owner'
  | 'description___childMarkdownRemark___internal___type'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___sys___type'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___description'
  | 'childContentfulBlogPostDescriptionTextNode___sys___type'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulBlogPostBodyTextNode___id'
  | 'childContentfulBlogPostBodyTextNode___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children___id'
  | 'childContentfulBlogPostBodyTextNode___parent___children___children'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___content'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___description'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___type'
  | 'childContentfulBlogPostBodyTextNode___children'
  | 'childContentfulBlogPostBodyTextNode___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___children'
  | 'childContentfulBlogPostBodyTextNode___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___internal___content'
  | 'childContentfulBlogPostBodyTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___children___internal___description'
  | 'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___children___internal___type'
  | 'childContentfulBlogPostBodyTextNode___internal___content'
  | 'childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___internal___description'
  | 'childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___internal___type'
  | 'childContentfulBlogPostBodyTextNode___body'
  | 'childContentfulBlogPostBodyTextNode___sys___type'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulBlogPostFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale';

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPersonSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'title'
  | 'company'
  | 'email'
  | 'phone'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'blog_post'
  | 'blog_post___contentful_id'
  | 'blog_post___id'
  | 'blog_post___node_locale'
  | 'blog_post___title'
  | 'blog_post___slug'
  | 'blog_post___publishDate'
  | 'blog_post___tags'
  | 'blog_post___author___contentful_id'
  | 'blog_post___author___id'
  | 'blog_post___author___node_locale'
  | 'blog_post___author___name'
  | 'blog_post___author___title'
  | 'blog_post___author___company'
  | 'blog_post___author___email'
  | 'blog_post___author___phone'
  | 'blog_post___author___facebook'
  | 'blog_post___author___twitter'
  | 'blog_post___author___github'
  | 'blog_post___author___blog_post'
  | 'blog_post___author___blog_post___contentful_id'
  | 'blog_post___author___blog_post___id'
  | 'blog_post___author___blog_post___node_locale'
  | 'blog_post___author___blog_post___title'
  | 'blog_post___author___blog_post___slug'
  | 'blog_post___author___blog_post___publishDate'
  | 'blog_post___author___blog_post___tags'
  | 'blog_post___author___blog_post___spaceId'
  | 'blog_post___author___blog_post___createdAt'
  | 'blog_post___author___blog_post___updatedAt'
  | 'blog_post___author___blog_post___children'
  | 'blog_post___author___shortBio___id'
  | 'blog_post___author___shortBio___children'
  | 'blog_post___author___shortBio___shortBio'
  | 'blog_post___author___spaceId'
  | 'blog_post___author___createdAt'
  | 'blog_post___author___updatedAt'
  | 'blog_post___author___sys___type'
  | 'blog_post___author___sys___revision'
  | 'blog_post___author___parent___id'
  | 'blog_post___author___parent___children'
  | 'blog_post___author___children'
  | 'blog_post___author___children___id'
  | 'blog_post___author___children___children'
  | 'blog_post___author___internal___content'
  | 'blog_post___author___internal___contentDigest'
  | 'blog_post___author___internal___description'
  | 'blog_post___author___internal___fieldOwners'
  | 'blog_post___author___internal___ignoreType'
  | 'blog_post___author___internal___mediaType'
  | 'blog_post___author___internal___owner'
  | 'blog_post___author___internal___type'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___id'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___children'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___shortBio'
  | 'blog_post___description___id'
  | 'blog_post___description___parent___id'
  | 'blog_post___description___parent___children'
  | 'blog_post___description___children'
  | 'blog_post___description___children___id'
  | 'blog_post___description___children___children'
  | 'blog_post___description___internal___content'
  | 'blog_post___description___internal___contentDigest'
  | 'blog_post___description___internal___description'
  | 'blog_post___description___internal___fieldOwners'
  | 'blog_post___description___internal___ignoreType'
  | 'blog_post___description___internal___mediaType'
  | 'blog_post___description___internal___owner'
  | 'blog_post___description___internal___type'
  | 'blog_post___description___description'
  | 'blog_post___description___sys___type'
  | 'blog_post___description___childMarkdownRemark___id'
  | 'blog_post___description___childMarkdownRemark___excerpt'
  | 'blog_post___description___childMarkdownRemark___rawMarkdownBody'
  | 'blog_post___description___childMarkdownRemark___html'
  | 'blog_post___description___childMarkdownRemark___htmlAst'
  | 'blog_post___description___childMarkdownRemark___excerptAst'
  | 'blog_post___description___childMarkdownRemark___headings'
  | 'blog_post___description___childMarkdownRemark___timeToRead'
  | 'blog_post___description___childMarkdownRemark___tableOfContents'
  | 'blog_post___description___childMarkdownRemark___children'
  | 'blog_post___body___id'
  | 'blog_post___body___parent___id'
  | 'blog_post___body___parent___children'
  | 'blog_post___body___children'
  | 'blog_post___body___children___id'
  | 'blog_post___body___children___children'
  | 'blog_post___body___internal___content'
  | 'blog_post___body___internal___contentDigest'
  | 'blog_post___body___internal___description'
  | 'blog_post___body___internal___fieldOwners'
  | 'blog_post___body___internal___ignoreType'
  | 'blog_post___body___internal___mediaType'
  | 'blog_post___body___internal___owner'
  | 'blog_post___body___internal___type'
  | 'blog_post___body___body'
  | 'blog_post___body___sys___type'
  | 'blog_post___body___childMarkdownRemark___id'
  | 'blog_post___body___childMarkdownRemark___excerpt'
  | 'blog_post___body___childMarkdownRemark___rawMarkdownBody'
  | 'blog_post___body___childMarkdownRemark___html'
  | 'blog_post___body___childMarkdownRemark___htmlAst'
  | 'blog_post___body___childMarkdownRemark___excerptAst'
  | 'blog_post___body___childMarkdownRemark___headings'
  | 'blog_post___body___childMarkdownRemark___timeToRead'
  | 'blog_post___body___childMarkdownRemark___tableOfContents'
  | 'blog_post___body___childMarkdownRemark___children'
  | 'blog_post___spaceId'
  | 'blog_post___createdAt'
  | 'blog_post___updatedAt'
  | 'blog_post___sys___type'
  | 'blog_post___sys___revision'
  | 'blog_post___parent___id'
  | 'blog_post___parent___parent___id'
  | 'blog_post___parent___parent___children'
  | 'blog_post___parent___children'
  | 'blog_post___parent___children___id'
  | 'blog_post___parent___children___children'
  | 'blog_post___parent___internal___content'
  | 'blog_post___parent___internal___contentDigest'
  | 'blog_post___parent___internal___description'
  | 'blog_post___parent___internal___fieldOwners'
  | 'blog_post___parent___internal___ignoreType'
  | 'blog_post___parent___internal___mediaType'
  | 'blog_post___parent___internal___owner'
  | 'blog_post___parent___internal___type'
  | 'blog_post___children'
  | 'blog_post___children___id'
  | 'blog_post___children___parent___id'
  | 'blog_post___children___parent___children'
  | 'blog_post___children___children'
  | 'blog_post___children___children___id'
  | 'blog_post___children___children___children'
  | 'blog_post___children___internal___content'
  | 'blog_post___children___internal___contentDigest'
  | 'blog_post___children___internal___description'
  | 'blog_post___children___internal___fieldOwners'
  | 'blog_post___children___internal___ignoreType'
  | 'blog_post___children___internal___mediaType'
  | 'blog_post___children___internal___owner'
  | 'blog_post___children___internal___type'
  | 'blog_post___internal___content'
  | 'blog_post___internal___contentDigest'
  | 'blog_post___internal___description'
  | 'blog_post___internal___fieldOwners'
  | 'blog_post___internal___ignoreType'
  | 'blog_post___internal___mediaType'
  | 'blog_post___internal___owner'
  | 'blog_post___internal___type'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___description'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___sys___type'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostBodyTextNode___body'
  | 'blog_post___childContentfulBlogPostBodyTextNode___sys___type'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children'
  | 'shortBio___id'
  | 'shortBio___parent___id'
  | 'shortBio___parent___parent___id'
  | 'shortBio___parent___parent___children'
  | 'shortBio___parent___children'
  | 'shortBio___parent___children___id'
  | 'shortBio___parent___children___children'
  | 'shortBio___parent___internal___content'
  | 'shortBio___parent___internal___contentDigest'
  | 'shortBio___parent___internal___description'
  | 'shortBio___parent___internal___fieldOwners'
  | 'shortBio___parent___internal___ignoreType'
  | 'shortBio___parent___internal___mediaType'
  | 'shortBio___parent___internal___owner'
  | 'shortBio___parent___internal___type'
  | 'shortBio___children'
  | 'shortBio___children___id'
  | 'shortBio___children___parent___id'
  | 'shortBio___children___parent___children'
  | 'shortBio___children___children'
  | 'shortBio___children___children___id'
  | 'shortBio___children___children___children'
  | 'shortBio___children___internal___content'
  | 'shortBio___children___internal___contentDigest'
  | 'shortBio___children___internal___description'
  | 'shortBio___children___internal___fieldOwners'
  | 'shortBio___children___internal___ignoreType'
  | 'shortBio___children___internal___mediaType'
  | 'shortBio___children___internal___owner'
  | 'shortBio___children___internal___type'
  | 'shortBio___internal___content'
  | 'shortBio___internal___contentDigest'
  | 'shortBio___internal___description'
  | 'shortBio___internal___fieldOwners'
  | 'shortBio___internal___ignoreType'
  | 'shortBio___internal___mediaType'
  | 'shortBio___internal___owner'
  | 'shortBio___internal___type'
  | 'shortBio___shortBio'
  | 'shortBio___sys___type'
  | 'shortBio___childMarkdownRemark___id'
  | 'shortBio___childMarkdownRemark___frontmatter___title'
  | 'shortBio___childMarkdownRemark___excerpt'
  | 'shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'shortBio___childMarkdownRemark___html'
  | 'shortBio___childMarkdownRemark___htmlAst'
  | 'shortBio___childMarkdownRemark___excerptAst'
  | 'shortBio___childMarkdownRemark___headings'
  | 'shortBio___childMarkdownRemark___headings___id'
  | 'shortBio___childMarkdownRemark___headings___value'
  | 'shortBio___childMarkdownRemark___headings___depth'
  | 'shortBio___childMarkdownRemark___timeToRead'
  | 'shortBio___childMarkdownRemark___tableOfContents'
  | 'shortBio___childMarkdownRemark___wordCount___paragraphs'
  | 'shortBio___childMarkdownRemark___wordCount___sentences'
  | 'shortBio___childMarkdownRemark___wordCount___words'
  | 'shortBio___childMarkdownRemark___parent___id'
  | 'shortBio___childMarkdownRemark___parent___children'
  | 'shortBio___childMarkdownRemark___children'
  | 'shortBio___childMarkdownRemark___children___id'
  | 'shortBio___childMarkdownRemark___children___children'
  | 'shortBio___childMarkdownRemark___internal___content'
  | 'shortBio___childMarkdownRemark___internal___contentDigest'
  | 'shortBio___childMarkdownRemark___internal___description'
  | 'shortBio___childMarkdownRemark___internal___fieldOwners'
  | 'shortBio___childMarkdownRemark___internal___ignoreType'
  | 'shortBio___childMarkdownRemark___internal___mediaType'
  | 'shortBio___childMarkdownRemark___internal___owner'
  | 'shortBio___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulPersonShortBioTextNode___id'
  | 'childContentfulPersonShortBioTextNode___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children___id'
  | 'childContentfulPersonShortBioTextNode___parent___children___children'
  | 'childContentfulPersonShortBioTextNode___parent___internal___content'
  | 'childContentfulPersonShortBioTextNode___parent___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___parent___internal___description'
  | 'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___parent___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___owner'
  | 'childContentfulPersonShortBioTextNode___parent___internal___type'
  | 'childContentfulPersonShortBioTextNode___children'
  | 'childContentfulPersonShortBioTextNode___children___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___children'
  | 'childContentfulPersonShortBioTextNode___children___children'
  | 'childContentfulPersonShortBioTextNode___children___children___id'
  | 'childContentfulPersonShortBioTextNode___children___children___children'
  | 'childContentfulPersonShortBioTextNode___children___internal___content'
  | 'childContentfulPersonShortBioTextNode___children___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___children___internal___description'
  | 'childContentfulPersonShortBioTextNode___children___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___children___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___children___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___children___internal___owner'
  | 'childContentfulPersonShortBioTextNode___children___internal___type'
  | 'childContentfulPersonShortBioTextNode___internal___content'
  | 'childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___internal___description'
  | 'childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___internal___owner'
  | 'childContentfulPersonShortBioTextNode___internal___type'
  | 'childContentfulPersonShortBioTextNode___shortBio'
  | 'childContentfulPersonShortBioTextNode___sys___type'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type';

export type ContentfulPersonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  shortBio?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPersonShortBioTextNodeSys>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>;
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>;
  node: ContentfulPersonShortBioTextNode;
  previous?: Maybe<ContentfulPersonShortBioTextNode>;
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'shortBio'
  | 'sys___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonShortBioTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonShortBioTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPersonSysContentType>;
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

export type ContentfulPost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  content?: Maybe<ContentfulPostContent>;
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ContentfulAsset>;
  tag?: Maybe<Array<Maybe<ContentfulTag>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPostSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPostPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostGroupConnection>;
};


export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostContent = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulAsset>>>;
};

export type ContentfulPostContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
  references?: Maybe<ContentfulAssetFilterListInput>;
};

export type ContentfulPostEdge = {
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export type ContentfulPostFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'publishedAt'
  | 'content___raw'
  | 'content___references'
  | 'content___references___contentful_id'
  | 'content___references___id'
  | 'content___references___spaceId'
  | 'content___references___createdAt'
  | 'content___references___updatedAt'
  | 'content___references___file___url'
  | 'content___references___file___fileName'
  | 'content___references___file___contentType'
  | 'content___references___title'
  | 'content___references___description'
  | 'content___references___node_locale'
  | 'content___references___sys___type'
  | 'content___references___sys___revision'
  | 'content___references___fixed___base64'
  | 'content___references___fixed___tracedSVG'
  | 'content___references___fixed___aspectRatio'
  | 'content___references___fixed___width'
  | 'content___references___fixed___height'
  | 'content___references___fixed___src'
  | 'content___references___fixed___srcSet'
  | 'content___references___fixed___srcWebp'
  | 'content___references___fixed___srcSetWebp'
  | 'content___references___resolutions___base64'
  | 'content___references___resolutions___tracedSVG'
  | 'content___references___resolutions___aspectRatio'
  | 'content___references___resolutions___width'
  | 'content___references___resolutions___height'
  | 'content___references___resolutions___src'
  | 'content___references___resolutions___srcSet'
  | 'content___references___resolutions___srcWebp'
  | 'content___references___resolutions___srcSetWebp'
  | 'content___references___fluid___base64'
  | 'content___references___fluid___tracedSVG'
  | 'content___references___fluid___aspectRatio'
  | 'content___references___fluid___src'
  | 'content___references___fluid___srcSet'
  | 'content___references___fluid___srcWebp'
  | 'content___references___fluid___srcSetWebp'
  | 'content___references___fluid___sizes'
  | 'content___references___sizes___base64'
  | 'content___references___sizes___tracedSVG'
  | 'content___references___sizes___aspectRatio'
  | 'content___references___sizes___src'
  | 'content___references___sizes___srcSet'
  | 'content___references___sizes___srcWebp'
  | 'content___references___sizes___srcSetWebp'
  | 'content___references___sizes___sizes'
  | 'content___references___resize___base64'
  | 'content___references___resize___tracedSVG'
  | 'content___references___resize___src'
  | 'content___references___resize___width'
  | 'content___references___resize___height'
  | 'content___references___resize___aspectRatio'
  | 'content___references___parent___id'
  | 'content___references___parent___children'
  | 'content___references___children'
  | 'content___references___children___id'
  | 'content___references___children___children'
  | 'content___references___internal___content'
  | 'content___references___internal___contentDigest'
  | 'content___references___internal___description'
  | 'content___references___internal___fieldOwners'
  | 'content___references___internal___ignoreType'
  | 'content___references___internal___mediaType'
  | 'content___references___internal___owner'
  | 'content___references___internal___type'
  | 'slug'
  | 'thumbnail___contentful_id'
  | 'thumbnail___id'
  | 'thumbnail___spaceId'
  | 'thumbnail___createdAt'
  | 'thumbnail___updatedAt'
  | 'thumbnail___file___url'
  | 'thumbnail___file___details___size'
  | 'thumbnail___file___fileName'
  | 'thumbnail___file___contentType'
  | 'thumbnail___title'
  | 'thumbnail___description'
  | 'thumbnail___node_locale'
  | 'thumbnail___sys___type'
  | 'thumbnail___sys___revision'
  | 'thumbnail___fixed___base64'
  | 'thumbnail___fixed___tracedSVG'
  | 'thumbnail___fixed___aspectRatio'
  | 'thumbnail___fixed___width'
  | 'thumbnail___fixed___height'
  | 'thumbnail___fixed___src'
  | 'thumbnail___fixed___srcSet'
  | 'thumbnail___fixed___srcWebp'
  | 'thumbnail___fixed___srcSetWebp'
  | 'thumbnail___resolutions___base64'
  | 'thumbnail___resolutions___tracedSVG'
  | 'thumbnail___resolutions___aspectRatio'
  | 'thumbnail___resolutions___width'
  | 'thumbnail___resolutions___height'
  | 'thumbnail___resolutions___src'
  | 'thumbnail___resolutions___srcSet'
  | 'thumbnail___resolutions___srcWebp'
  | 'thumbnail___resolutions___srcSetWebp'
  | 'thumbnail___fluid___base64'
  | 'thumbnail___fluid___tracedSVG'
  | 'thumbnail___fluid___aspectRatio'
  | 'thumbnail___fluid___src'
  | 'thumbnail___fluid___srcSet'
  | 'thumbnail___fluid___srcWebp'
  | 'thumbnail___fluid___srcSetWebp'
  | 'thumbnail___fluid___sizes'
  | 'thumbnail___sizes___base64'
  | 'thumbnail___sizes___tracedSVG'
  | 'thumbnail___sizes___aspectRatio'
  | 'thumbnail___sizes___src'
  | 'thumbnail___sizes___srcSet'
  | 'thumbnail___sizes___srcWebp'
  | 'thumbnail___sizes___srcSetWebp'
  | 'thumbnail___sizes___sizes'
  | 'thumbnail___resize___base64'
  | 'thumbnail___resize___tracedSVG'
  | 'thumbnail___resize___src'
  | 'thumbnail___resize___width'
  | 'thumbnail___resize___height'
  | 'thumbnail___resize___aspectRatio'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'tag'
  | 'tag___contentful_id'
  | 'tag___id'
  | 'tag___node_locale'
  | 'tag___title'
  | 'tag___slug'
  | 'tag___post'
  | 'tag___post___contentful_id'
  | 'tag___post___id'
  | 'tag___post___node_locale'
  | 'tag___post___title'
  | 'tag___post___publishedAt'
  | 'tag___post___content___raw'
  | 'tag___post___content___references'
  | 'tag___post___slug'
  | 'tag___post___thumbnail___contentful_id'
  | 'tag___post___thumbnail___id'
  | 'tag___post___thumbnail___spaceId'
  | 'tag___post___thumbnail___createdAt'
  | 'tag___post___thumbnail___updatedAt'
  | 'tag___post___thumbnail___title'
  | 'tag___post___thumbnail___description'
  | 'tag___post___thumbnail___node_locale'
  | 'tag___post___thumbnail___children'
  | 'tag___post___tag'
  | 'tag___post___tag___contentful_id'
  | 'tag___post___tag___id'
  | 'tag___post___tag___node_locale'
  | 'tag___post___tag___title'
  | 'tag___post___tag___slug'
  | 'tag___post___tag___post'
  | 'tag___post___tag___spaceId'
  | 'tag___post___tag___createdAt'
  | 'tag___post___tag___updatedAt'
  | 'tag___post___tag___children'
  | 'tag___post___spaceId'
  | 'tag___post___createdAt'
  | 'tag___post___updatedAt'
  | 'tag___post___sys___type'
  | 'tag___post___sys___revision'
  | 'tag___post___parent___id'
  | 'tag___post___parent___children'
  | 'tag___post___children'
  | 'tag___post___children___id'
  | 'tag___post___children___children'
  | 'tag___post___internal___content'
  | 'tag___post___internal___contentDigest'
  | 'tag___post___internal___description'
  | 'tag___post___internal___fieldOwners'
  | 'tag___post___internal___ignoreType'
  | 'tag___post___internal___mediaType'
  | 'tag___post___internal___owner'
  | 'tag___post___internal___type'
  | 'tag___spaceId'
  | 'tag___createdAt'
  | 'tag___updatedAt'
  | 'tag___sys___type'
  | 'tag___sys___revision'
  | 'tag___parent___id'
  | 'tag___parent___parent___id'
  | 'tag___parent___parent___children'
  | 'tag___parent___children'
  | 'tag___parent___children___id'
  | 'tag___parent___children___children'
  | 'tag___parent___internal___content'
  | 'tag___parent___internal___contentDigest'
  | 'tag___parent___internal___description'
  | 'tag___parent___internal___fieldOwners'
  | 'tag___parent___internal___ignoreType'
  | 'tag___parent___internal___mediaType'
  | 'tag___parent___internal___owner'
  | 'tag___parent___internal___type'
  | 'tag___children'
  | 'tag___children___id'
  | 'tag___children___parent___id'
  | 'tag___children___parent___children'
  | 'tag___children___children'
  | 'tag___children___children___id'
  | 'tag___children___children___children'
  | 'tag___children___internal___content'
  | 'tag___children___internal___contentDigest'
  | 'tag___children___internal___description'
  | 'tag___children___internal___fieldOwners'
  | 'tag___children___internal___ignoreType'
  | 'tag___children___internal___mediaType'
  | 'tag___children___internal___owner'
  | 'tag___children___internal___type'
  | 'tag___internal___content'
  | 'tag___internal___contentDigest'
  | 'tag___internal___description'
  | 'tag___internal___fieldOwners'
  | 'tag___internal___ignoreType'
  | 'tag___internal___mediaType'
  | 'tag___internal___owner'
  | 'tag___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulPostFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulPostContentFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  tag?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>;
};

export type ContentfulPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostSysContentType>;
};

export type ContentfulPostSysContentType = {
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

export type ContentfulProject = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['Date']>;
  repositoryUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  about?: Maybe<Array<Maybe<ContentfulAbout>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulProjectPublishedDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export type ContentfulProjectFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'publishedDate'
  | 'repositoryUrl'
  | 'description'
  | 'projectUrl'
  | 'type'
  | 'logo___contentful_id'
  | 'logo___id'
  | 'logo___spaceId'
  | 'logo___createdAt'
  | 'logo___updatedAt'
  | 'logo___file___url'
  | 'logo___file___details___size'
  | 'logo___file___fileName'
  | 'logo___file___contentType'
  | 'logo___title'
  | 'logo___description'
  | 'logo___node_locale'
  | 'logo___sys___type'
  | 'logo___sys___revision'
  | 'logo___fixed___base64'
  | 'logo___fixed___tracedSVG'
  | 'logo___fixed___aspectRatio'
  | 'logo___fixed___width'
  | 'logo___fixed___height'
  | 'logo___fixed___src'
  | 'logo___fixed___srcSet'
  | 'logo___fixed___srcWebp'
  | 'logo___fixed___srcSetWebp'
  | 'logo___resolutions___base64'
  | 'logo___resolutions___tracedSVG'
  | 'logo___resolutions___aspectRatio'
  | 'logo___resolutions___width'
  | 'logo___resolutions___height'
  | 'logo___resolutions___src'
  | 'logo___resolutions___srcSet'
  | 'logo___resolutions___srcWebp'
  | 'logo___resolutions___srcSetWebp'
  | 'logo___fluid___base64'
  | 'logo___fluid___tracedSVG'
  | 'logo___fluid___aspectRatio'
  | 'logo___fluid___src'
  | 'logo___fluid___srcSet'
  | 'logo___fluid___srcWebp'
  | 'logo___fluid___srcSetWebp'
  | 'logo___fluid___sizes'
  | 'logo___sizes___base64'
  | 'logo___sizes___tracedSVG'
  | 'logo___sizes___aspectRatio'
  | 'logo___sizes___src'
  | 'logo___sizes___srcSet'
  | 'logo___sizes___srcWebp'
  | 'logo___sizes___srcSetWebp'
  | 'logo___sizes___sizes'
  | 'logo___resize___base64'
  | 'logo___resize___tracedSVG'
  | 'logo___resize___src'
  | 'logo___resize___width'
  | 'logo___resize___height'
  | 'logo___resize___aspectRatio'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'about'
  | 'about___contentful_id'
  | 'about___id'
  | 'about___node_locale'
  | 'about___name'
  | 'about___description'
  | 'about___roles'
  | 'about___mediumUser'
  | 'about___socialLinks'
  | 'about___socialLinks___contentful_id'
  | 'about___socialLinks___id'
  | 'about___socialLinks___node_locale'
  | 'about___socialLinks___name'
  | 'about___socialLinks___url'
  | 'about___socialLinks___fontAwesomeIcon'
  | 'about___socialLinks___about'
  | 'about___socialLinks___about___contentful_id'
  | 'about___socialLinks___about___id'
  | 'about___socialLinks___about___node_locale'
  | 'about___socialLinks___about___name'
  | 'about___socialLinks___about___description'
  | 'about___socialLinks___about___roles'
  | 'about___socialLinks___about___mediumUser'
  | 'about___socialLinks___about___socialLinks'
  | 'about___socialLinks___about___projects'
  | 'about___socialLinks___about___spaceId'
  | 'about___socialLinks___about___createdAt'
  | 'about___socialLinks___about___updatedAt'
  | 'about___socialLinks___about___children'
  | 'about___socialLinks___spaceId'
  | 'about___socialLinks___createdAt'
  | 'about___socialLinks___updatedAt'
  | 'about___socialLinks___sys___type'
  | 'about___socialLinks___sys___revision'
  | 'about___socialLinks___parent___id'
  | 'about___socialLinks___parent___children'
  | 'about___socialLinks___children'
  | 'about___socialLinks___children___id'
  | 'about___socialLinks___children___children'
  | 'about___socialLinks___internal___content'
  | 'about___socialLinks___internal___contentDigest'
  | 'about___socialLinks___internal___description'
  | 'about___socialLinks___internal___fieldOwners'
  | 'about___socialLinks___internal___ignoreType'
  | 'about___socialLinks___internal___mediaType'
  | 'about___socialLinks___internal___owner'
  | 'about___socialLinks___internal___type'
  | 'about___profile___contentful_id'
  | 'about___profile___id'
  | 'about___profile___spaceId'
  | 'about___profile___createdAt'
  | 'about___profile___updatedAt'
  | 'about___profile___file___url'
  | 'about___profile___file___fileName'
  | 'about___profile___file___contentType'
  | 'about___profile___title'
  | 'about___profile___description'
  | 'about___profile___node_locale'
  | 'about___profile___sys___type'
  | 'about___profile___sys___revision'
  | 'about___profile___fixed___base64'
  | 'about___profile___fixed___tracedSVG'
  | 'about___profile___fixed___aspectRatio'
  | 'about___profile___fixed___width'
  | 'about___profile___fixed___height'
  | 'about___profile___fixed___src'
  | 'about___profile___fixed___srcSet'
  | 'about___profile___fixed___srcWebp'
  | 'about___profile___fixed___srcSetWebp'
  | 'about___profile___resolutions___base64'
  | 'about___profile___resolutions___tracedSVG'
  | 'about___profile___resolutions___aspectRatio'
  | 'about___profile___resolutions___width'
  | 'about___profile___resolutions___height'
  | 'about___profile___resolutions___src'
  | 'about___profile___resolutions___srcSet'
  | 'about___profile___resolutions___srcWebp'
  | 'about___profile___resolutions___srcSetWebp'
  | 'about___profile___fluid___base64'
  | 'about___profile___fluid___tracedSVG'
  | 'about___profile___fluid___aspectRatio'
  | 'about___profile___fluid___src'
  | 'about___profile___fluid___srcSet'
  | 'about___profile___fluid___srcWebp'
  | 'about___profile___fluid___srcSetWebp'
  | 'about___profile___fluid___sizes'
  | 'about___profile___sizes___base64'
  | 'about___profile___sizes___tracedSVG'
  | 'about___profile___sizes___aspectRatio'
  | 'about___profile___sizes___src'
  | 'about___profile___sizes___srcSet'
  | 'about___profile___sizes___srcWebp'
  | 'about___profile___sizes___srcSetWebp'
  | 'about___profile___sizes___sizes'
  | 'about___profile___resize___base64'
  | 'about___profile___resize___tracedSVG'
  | 'about___profile___resize___src'
  | 'about___profile___resize___width'
  | 'about___profile___resize___height'
  | 'about___profile___resize___aspectRatio'
  | 'about___profile___parent___id'
  | 'about___profile___parent___children'
  | 'about___profile___children'
  | 'about___profile___children___id'
  | 'about___profile___children___children'
  | 'about___profile___internal___content'
  | 'about___profile___internal___contentDigest'
  | 'about___profile___internal___description'
  | 'about___profile___internal___fieldOwners'
  | 'about___profile___internal___ignoreType'
  | 'about___profile___internal___mediaType'
  | 'about___profile___internal___owner'
  | 'about___profile___internal___type'
  | 'about___projects'
  | 'about___projects___contentful_id'
  | 'about___projects___id'
  | 'about___projects___node_locale'
  | 'about___projects___name'
  | 'about___projects___publishedDate'
  | 'about___projects___repositoryUrl'
  | 'about___projects___description'
  | 'about___projects___projectUrl'
  | 'about___projects___type'
  | 'about___projects___logo___contentful_id'
  | 'about___projects___logo___id'
  | 'about___projects___logo___spaceId'
  | 'about___projects___logo___createdAt'
  | 'about___projects___logo___updatedAt'
  | 'about___projects___logo___title'
  | 'about___projects___logo___description'
  | 'about___projects___logo___node_locale'
  | 'about___projects___logo___children'
  | 'about___projects___about'
  | 'about___projects___about___contentful_id'
  | 'about___projects___about___id'
  | 'about___projects___about___node_locale'
  | 'about___projects___about___name'
  | 'about___projects___about___description'
  | 'about___projects___about___roles'
  | 'about___projects___about___mediumUser'
  | 'about___projects___about___socialLinks'
  | 'about___projects___about___projects'
  | 'about___projects___about___spaceId'
  | 'about___projects___about___createdAt'
  | 'about___projects___about___updatedAt'
  | 'about___projects___about___children'
  | 'about___projects___spaceId'
  | 'about___projects___createdAt'
  | 'about___projects___updatedAt'
  | 'about___projects___sys___type'
  | 'about___projects___sys___revision'
  | 'about___projects___parent___id'
  | 'about___projects___parent___children'
  | 'about___projects___children'
  | 'about___projects___children___id'
  | 'about___projects___children___children'
  | 'about___projects___internal___content'
  | 'about___projects___internal___contentDigest'
  | 'about___projects___internal___description'
  | 'about___projects___internal___fieldOwners'
  | 'about___projects___internal___ignoreType'
  | 'about___projects___internal___mediaType'
  | 'about___projects___internal___owner'
  | 'about___projects___internal___type'
  | 'about___aboutMe___id'
  | 'about___aboutMe___parent___id'
  | 'about___aboutMe___parent___children'
  | 'about___aboutMe___children'
  | 'about___aboutMe___children___id'
  | 'about___aboutMe___children___children'
  | 'about___aboutMe___internal___content'
  | 'about___aboutMe___internal___contentDigest'
  | 'about___aboutMe___internal___description'
  | 'about___aboutMe___internal___fieldOwners'
  | 'about___aboutMe___internal___ignoreType'
  | 'about___aboutMe___internal___mediaType'
  | 'about___aboutMe___internal___owner'
  | 'about___aboutMe___internal___type'
  | 'about___aboutMe___aboutMe'
  | 'about___aboutMe___sys___type'
  | 'about___aboutMe___childMarkdownRemark___id'
  | 'about___aboutMe___childMarkdownRemark___excerpt'
  | 'about___aboutMe___childMarkdownRemark___rawMarkdownBody'
  | 'about___aboutMe___childMarkdownRemark___html'
  | 'about___aboutMe___childMarkdownRemark___htmlAst'
  | 'about___aboutMe___childMarkdownRemark___excerptAst'
  | 'about___aboutMe___childMarkdownRemark___headings'
  | 'about___aboutMe___childMarkdownRemark___timeToRead'
  | 'about___aboutMe___childMarkdownRemark___tableOfContents'
  | 'about___aboutMe___childMarkdownRemark___children'
  | 'about___spaceId'
  | 'about___createdAt'
  | 'about___updatedAt'
  | 'about___sys___type'
  | 'about___sys___revision'
  | 'about___parent___id'
  | 'about___parent___parent___id'
  | 'about___parent___parent___children'
  | 'about___parent___children'
  | 'about___parent___children___id'
  | 'about___parent___children___children'
  | 'about___parent___internal___content'
  | 'about___parent___internal___contentDigest'
  | 'about___parent___internal___description'
  | 'about___parent___internal___fieldOwners'
  | 'about___parent___internal___ignoreType'
  | 'about___parent___internal___mediaType'
  | 'about___parent___internal___owner'
  | 'about___parent___internal___type'
  | 'about___children'
  | 'about___children___id'
  | 'about___children___parent___id'
  | 'about___children___parent___children'
  | 'about___children___children'
  | 'about___children___children___id'
  | 'about___children___children___children'
  | 'about___children___internal___content'
  | 'about___children___internal___contentDigest'
  | 'about___children___internal___description'
  | 'about___children___internal___fieldOwners'
  | 'about___children___internal___ignoreType'
  | 'about___children___internal___mediaType'
  | 'about___children___internal___owner'
  | 'about___children___internal___type'
  | 'about___internal___content'
  | 'about___internal___contentDigest'
  | 'about___internal___description'
  | 'about___internal___fieldOwners'
  | 'about___internal___ignoreType'
  | 'about___internal___mediaType'
  | 'about___internal___owner'
  | 'about___internal___type'
  | 'about___childContentfulAboutAboutMeTextNode___id'
  | 'about___childContentfulAboutAboutMeTextNode___parent___id'
  | 'about___childContentfulAboutAboutMeTextNode___parent___children'
  | 'about___childContentfulAboutAboutMeTextNode___children'
  | 'about___childContentfulAboutAboutMeTextNode___children___id'
  | 'about___childContentfulAboutAboutMeTextNode___children___children'
  | 'about___childContentfulAboutAboutMeTextNode___internal___content'
  | 'about___childContentfulAboutAboutMeTextNode___internal___contentDigest'
  | 'about___childContentfulAboutAboutMeTextNode___internal___description'
  | 'about___childContentfulAboutAboutMeTextNode___internal___fieldOwners'
  | 'about___childContentfulAboutAboutMeTextNode___internal___ignoreType'
  | 'about___childContentfulAboutAboutMeTextNode___internal___mediaType'
  | 'about___childContentfulAboutAboutMeTextNode___internal___owner'
  | 'about___childContentfulAboutAboutMeTextNode___internal___type'
  | 'about___childContentfulAboutAboutMeTextNode___aboutMe'
  | 'about___childContentfulAboutAboutMeTextNode___sys___type'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___id'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerpt'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___html'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___htmlAst'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerptAst'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___timeToRead'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___tableOfContents'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  publishedDate?: Maybe<DateQueryOperatorInput>;
  repositoryUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  about?: Maybe<ContentfulAboutFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSocialLink = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fontAwesomeIcon?: Maybe<Scalars['String']>;
  about?: Maybe<Array<Maybe<ContentfulAbout>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSocialLinkSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSocialLinkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSocialLinkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSocialLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSocialLinkEdge>;
  nodes: Array<ContentfulSocialLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSocialLinkGroupConnection>;
};


export type ContentfulSocialLinkConnectionDistinctArgs = {
  field: ContentfulSocialLinkFieldsEnum;
};


export type ContentfulSocialLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSocialLinkFieldsEnum;
};

export type ContentfulSocialLinkEdge = {
  next?: Maybe<ContentfulSocialLink>;
  node: ContentfulSocialLink;
  previous?: Maybe<ContentfulSocialLink>;
};

export type ContentfulSocialLinkFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'url'
  | 'fontAwesomeIcon'
  | 'about'
  | 'about___contentful_id'
  | 'about___id'
  | 'about___node_locale'
  | 'about___name'
  | 'about___description'
  | 'about___roles'
  | 'about___mediumUser'
  | 'about___socialLinks'
  | 'about___socialLinks___contentful_id'
  | 'about___socialLinks___id'
  | 'about___socialLinks___node_locale'
  | 'about___socialLinks___name'
  | 'about___socialLinks___url'
  | 'about___socialLinks___fontAwesomeIcon'
  | 'about___socialLinks___about'
  | 'about___socialLinks___about___contentful_id'
  | 'about___socialLinks___about___id'
  | 'about___socialLinks___about___node_locale'
  | 'about___socialLinks___about___name'
  | 'about___socialLinks___about___description'
  | 'about___socialLinks___about___roles'
  | 'about___socialLinks___about___mediumUser'
  | 'about___socialLinks___about___socialLinks'
  | 'about___socialLinks___about___projects'
  | 'about___socialLinks___about___spaceId'
  | 'about___socialLinks___about___createdAt'
  | 'about___socialLinks___about___updatedAt'
  | 'about___socialLinks___about___children'
  | 'about___socialLinks___spaceId'
  | 'about___socialLinks___createdAt'
  | 'about___socialLinks___updatedAt'
  | 'about___socialLinks___sys___type'
  | 'about___socialLinks___sys___revision'
  | 'about___socialLinks___parent___id'
  | 'about___socialLinks___parent___children'
  | 'about___socialLinks___children'
  | 'about___socialLinks___children___id'
  | 'about___socialLinks___children___children'
  | 'about___socialLinks___internal___content'
  | 'about___socialLinks___internal___contentDigest'
  | 'about___socialLinks___internal___description'
  | 'about___socialLinks___internal___fieldOwners'
  | 'about___socialLinks___internal___ignoreType'
  | 'about___socialLinks___internal___mediaType'
  | 'about___socialLinks___internal___owner'
  | 'about___socialLinks___internal___type'
  | 'about___profile___contentful_id'
  | 'about___profile___id'
  | 'about___profile___spaceId'
  | 'about___profile___createdAt'
  | 'about___profile___updatedAt'
  | 'about___profile___file___url'
  | 'about___profile___file___fileName'
  | 'about___profile___file___contentType'
  | 'about___profile___title'
  | 'about___profile___description'
  | 'about___profile___node_locale'
  | 'about___profile___sys___type'
  | 'about___profile___sys___revision'
  | 'about___profile___fixed___base64'
  | 'about___profile___fixed___tracedSVG'
  | 'about___profile___fixed___aspectRatio'
  | 'about___profile___fixed___width'
  | 'about___profile___fixed___height'
  | 'about___profile___fixed___src'
  | 'about___profile___fixed___srcSet'
  | 'about___profile___fixed___srcWebp'
  | 'about___profile___fixed___srcSetWebp'
  | 'about___profile___resolutions___base64'
  | 'about___profile___resolutions___tracedSVG'
  | 'about___profile___resolutions___aspectRatio'
  | 'about___profile___resolutions___width'
  | 'about___profile___resolutions___height'
  | 'about___profile___resolutions___src'
  | 'about___profile___resolutions___srcSet'
  | 'about___profile___resolutions___srcWebp'
  | 'about___profile___resolutions___srcSetWebp'
  | 'about___profile___fluid___base64'
  | 'about___profile___fluid___tracedSVG'
  | 'about___profile___fluid___aspectRatio'
  | 'about___profile___fluid___src'
  | 'about___profile___fluid___srcSet'
  | 'about___profile___fluid___srcWebp'
  | 'about___profile___fluid___srcSetWebp'
  | 'about___profile___fluid___sizes'
  | 'about___profile___sizes___base64'
  | 'about___profile___sizes___tracedSVG'
  | 'about___profile___sizes___aspectRatio'
  | 'about___profile___sizes___src'
  | 'about___profile___sizes___srcSet'
  | 'about___profile___sizes___srcWebp'
  | 'about___profile___sizes___srcSetWebp'
  | 'about___profile___sizes___sizes'
  | 'about___profile___resize___base64'
  | 'about___profile___resize___tracedSVG'
  | 'about___profile___resize___src'
  | 'about___profile___resize___width'
  | 'about___profile___resize___height'
  | 'about___profile___resize___aspectRatio'
  | 'about___profile___parent___id'
  | 'about___profile___parent___children'
  | 'about___profile___children'
  | 'about___profile___children___id'
  | 'about___profile___children___children'
  | 'about___profile___internal___content'
  | 'about___profile___internal___contentDigest'
  | 'about___profile___internal___description'
  | 'about___profile___internal___fieldOwners'
  | 'about___profile___internal___ignoreType'
  | 'about___profile___internal___mediaType'
  | 'about___profile___internal___owner'
  | 'about___profile___internal___type'
  | 'about___projects'
  | 'about___projects___contentful_id'
  | 'about___projects___id'
  | 'about___projects___node_locale'
  | 'about___projects___name'
  | 'about___projects___publishedDate'
  | 'about___projects___repositoryUrl'
  | 'about___projects___description'
  | 'about___projects___projectUrl'
  | 'about___projects___type'
  | 'about___projects___logo___contentful_id'
  | 'about___projects___logo___id'
  | 'about___projects___logo___spaceId'
  | 'about___projects___logo___createdAt'
  | 'about___projects___logo___updatedAt'
  | 'about___projects___logo___title'
  | 'about___projects___logo___description'
  | 'about___projects___logo___node_locale'
  | 'about___projects___logo___children'
  | 'about___projects___about'
  | 'about___projects___about___contentful_id'
  | 'about___projects___about___id'
  | 'about___projects___about___node_locale'
  | 'about___projects___about___name'
  | 'about___projects___about___description'
  | 'about___projects___about___roles'
  | 'about___projects___about___mediumUser'
  | 'about___projects___about___socialLinks'
  | 'about___projects___about___projects'
  | 'about___projects___about___spaceId'
  | 'about___projects___about___createdAt'
  | 'about___projects___about___updatedAt'
  | 'about___projects___about___children'
  | 'about___projects___spaceId'
  | 'about___projects___createdAt'
  | 'about___projects___updatedAt'
  | 'about___projects___sys___type'
  | 'about___projects___sys___revision'
  | 'about___projects___parent___id'
  | 'about___projects___parent___children'
  | 'about___projects___children'
  | 'about___projects___children___id'
  | 'about___projects___children___children'
  | 'about___projects___internal___content'
  | 'about___projects___internal___contentDigest'
  | 'about___projects___internal___description'
  | 'about___projects___internal___fieldOwners'
  | 'about___projects___internal___ignoreType'
  | 'about___projects___internal___mediaType'
  | 'about___projects___internal___owner'
  | 'about___projects___internal___type'
  | 'about___aboutMe___id'
  | 'about___aboutMe___parent___id'
  | 'about___aboutMe___parent___children'
  | 'about___aboutMe___children'
  | 'about___aboutMe___children___id'
  | 'about___aboutMe___children___children'
  | 'about___aboutMe___internal___content'
  | 'about___aboutMe___internal___contentDigest'
  | 'about___aboutMe___internal___description'
  | 'about___aboutMe___internal___fieldOwners'
  | 'about___aboutMe___internal___ignoreType'
  | 'about___aboutMe___internal___mediaType'
  | 'about___aboutMe___internal___owner'
  | 'about___aboutMe___internal___type'
  | 'about___aboutMe___aboutMe'
  | 'about___aboutMe___sys___type'
  | 'about___aboutMe___childMarkdownRemark___id'
  | 'about___aboutMe___childMarkdownRemark___excerpt'
  | 'about___aboutMe___childMarkdownRemark___rawMarkdownBody'
  | 'about___aboutMe___childMarkdownRemark___html'
  | 'about___aboutMe___childMarkdownRemark___htmlAst'
  | 'about___aboutMe___childMarkdownRemark___excerptAst'
  | 'about___aboutMe___childMarkdownRemark___headings'
  | 'about___aboutMe___childMarkdownRemark___timeToRead'
  | 'about___aboutMe___childMarkdownRemark___tableOfContents'
  | 'about___aboutMe___childMarkdownRemark___children'
  | 'about___spaceId'
  | 'about___createdAt'
  | 'about___updatedAt'
  | 'about___sys___type'
  | 'about___sys___revision'
  | 'about___parent___id'
  | 'about___parent___parent___id'
  | 'about___parent___parent___children'
  | 'about___parent___children'
  | 'about___parent___children___id'
  | 'about___parent___children___children'
  | 'about___parent___internal___content'
  | 'about___parent___internal___contentDigest'
  | 'about___parent___internal___description'
  | 'about___parent___internal___fieldOwners'
  | 'about___parent___internal___ignoreType'
  | 'about___parent___internal___mediaType'
  | 'about___parent___internal___owner'
  | 'about___parent___internal___type'
  | 'about___children'
  | 'about___children___id'
  | 'about___children___parent___id'
  | 'about___children___parent___children'
  | 'about___children___children'
  | 'about___children___children___id'
  | 'about___children___children___children'
  | 'about___children___internal___content'
  | 'about___children___internal___contentDigest'
  | 'about___children___internal___description'
  | 'about___children___internal___fieldOwners'
  | 'about___children___internal___ignoreType'
  | 'about___children___internal___mediaType'
  | 'about___children___internal___owner'
  | 'about___children___internal___type'
  | 'about___internal___content'
  | 'about___internal___contentDigest'
  | 'about___internal___description'
  | 'about___internal___fieldOwners'
  | 'about___internal___ignoreType'
  | 'about___internal___mediaType'
  | 'about___internal___owner'
  | 'about___internal___type'
  | 'about___childContentfulAboutAboutMeTextNode___id'
  | 'about___childContentfulAboutAboutMeTextNode___parent___id'
  | 'about___childContentfulAboutAboutMeTextNode___parent___children'
  | 'about___childContentfulAboutAboutMeTextNode___children'
  | 'about___childContentfulAboutAboutMeTextNode___children___id'
  | 'about___childContentfulAboutAboutMeTextNode___children___children'
  | 'about___childContentfulAboutAboutMeTextNode___internal___content'
  | 'about___childContentfulAboutAboutMeTextNode___internal___contentDigest'
  | 'about___childContentfulAboutAboutMeTextNode___internal___description'
  | 'about___childContentfulAboutAboutMeTextNode___internal___fieldOwners'
  | 'about___childContentfulAboutAboutMeTextNode___internal___ignoreType'
  | 'about___childContentfulAboutAboutMeTextNode___internal___mediaType'
  | 'about___childContentfulAboutAboutMeTextNode___internal___owner'
  | 'about___childContentfulAboutAboutMeTextNode___internal___type'
  | 'about___childContentfulAboutAboutMeTextNode___aboutMe'
  | 'about___childContentfulAboutAboutMeTextNode___sys___type'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___id'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerpt'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___html'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___htmlAst'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerptAst'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___timeToRead'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___tableOfContents'
  | 'about___childContentfulAboutAboutMeTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSocialLinkFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fontAwesomeIcon?: Maybe<StringQueryOperatorInput>;
  about?: Maybe<ContentfulAboutFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSocialLinkSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSocialLinkFilterListInput = {
  elemMatch?: Maybe<ContentfulSocialLinkFilterInput>;
};

export type ContentfulSocialLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSocialLinkEdge>;
  nodes: Array<ContentfulSocialLink>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSocialLinkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSocialLinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSocialLinkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSocialLinkSysContentType>;
};

export type ContentfulSocialLinkSysContentType = {
  sys?: Maybe<ContentfulSocialLinkSysContentTypeSys>;
};

export type ContentfulSocialLinkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSocialLinkSysContentTypeSysFilterInput>;
};

export type ContentfulSocialLinkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSocialLinkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSocialLinkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSocialLinkSysContentTypeFilterInput>;
};

export type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulTagCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  next?: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous?: Maybe<ContentfulTag>;
};

export type ContentfulTagFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'post'
  | 'post___contentful_id'
  | 'post___id'
  | 'post___node_locale'
  | 'post___title'
  | 'post___publishedAt'
  | 'post___content___raw'
  | 'post___content___references'
  | 'post___content___references___contentful_id'
  | 'post___content___references___id'
  | 'post___content___references___spaceId'
  | 'post___content___references___createdAt'
  | 'post___content___references___updatedAt'
  | 'post___content___references___title'
  | 'post___content___references___description'
  | 'post___content___references___node_locale'
  | 'post___content___references___children'
  | 'post___slug'
  | 'post___thumbnail___contentful_id'
  | 'post___thumbnail___id'
  | 'post___thumbnail___spaceId'
  | 'post___thumbnail___createdAt'
  | 'post___thumbnail___updatedAt'
  | 'post___thumbnail___file___url'
  | 'post___thumbnail___file___fileName'
  | 'post___thumbnail___file___contentType'
  | 'post___thumbnail___title'
  | 'post___thumbnail___description'
  | 'post___thumbnail___node_locale'
  | 'post___thumbnail___sys___type'
  | 'post___thumbnail___sys___revision'
  | 'post___thumbnail___fixed___base64'
  | 'post___thumbnail___fixed___tracedSVG'
  | 'post___thumbnail___fixed___aspectRatio'
  | 'post___thumbnail___fixed___width'
  | 'post___thumbnail___fixed___height'
  | 'post___thumbnail___fixed___src'
  | 'post___thumbnail___fixed___srcSet'
  | 'post___thumbnail___fixed___srcWebp'
  | 'post___thumbnail___fixed___srcSetWebp'
  | 'post___thumbnail___resolutions___base64'
  | 'post___thumbnail___resolutions___tracedSVG'
  | 'post___thumbnail___resolutions___aspectRatio'
  | 'post___thumbnail___resolutions___width'
  | 'post___thumbnail___resolutions___height'
  | 'post___thumbnail___resolutions___src'
  | 'post___thumbnail___resolutions___srcSet'
  | 'post___thumbnail___resolutions___srcWebp'
  | 'post___thumbnail___resolutions___srcSetWebp'
  | 'post___thumbnail___fluid___base64'
  | 'post___thumbnail___fluid___tracedSVG'
  | 'post___thumbnail___fluid___aspectRatio'
  | 'post___thumbnail___fluid___src'
  | 'post___thumbnail___fluid___srcSet'
  | 'post___thumbnail___fluid___srcWebp'
  | 'post___thumbnail___fluid___srcSetWebp'
  | 'post___thumbnail___fluid___sizes'
  | 'post___thumbnail___sizes___base64'
  | 'post___thumbnail___sizes___tracedSVG'
  | 'post___thumbnail___sizes___aspectRatio'
  | 'post___thumbnail___sizes___src'
  | 'post___thumbnail___sizes___srcSet'
  | 'post___thumbnail___sizes___srcWebp'
  | 'post___thumbnail___sizes___srcSetWebp'
  | 'post___thumbnail___sizes___sizes'
  | 'post___thumbnail___resize___base64'
  | 'post___thumbnail___resize___tracedSVG'
  | 'post___thumbnail___resize___src'
  | 'post___thumbnail___resize___width'
  | 'post___thumbnail___resize___height'
  | 'post___thumbnail___resize___aspectRatio'
  | 'post___thumbnail___parent___id'
  | 'post___thumbnail___parent___children'
  | 'post___thumbnail___children'
  | 'post___thumbnail___children___id'
  | 'post___thumbnail___children___children'
  | 'post___thumbnail___internal___content'
  | 'post___thumbnail___internal___contentDigest'
  | 'post___thumbnail___internal___description'
  | 'post___thumbnail___internal___fieldOwners'
  | 'post___thumbnail___internal___ignoreType'
  | 'post___thumbnail___internal___mediaType'
  | 'post___thumbnail___internal___owner'
  | 'post___thumbnail___internal___type'
  | 'post___tag'
  | 'post___tag___contentful_id'
  | 'post___tag___id'
  | 'post___tag___node_locale'
  | 'post___tag___title'
  | 'post___tag___slug'
  | 'post___tag___post'
  | 'post___tag___post___contentful_id'
  | 'post___tag___post___id'
  | 'post___tag___post___node_locale'
  | 'post___tag___post___title'
  | 'post___tag___post___publishedAt'
  | 'post___tag___post___slug'
  | 'post___tag___post___tag'
  | 'post___tag___post___spaceId'
  | 'post___tag___post___createdAt'
  | 'post___tag___post___updatedAt'
  | 'post___tag___post___children'
  | 'post___tag___spaceId'
  | 'post___tag___createdAt'
  | 'post___tag___updatedAt'
  | 'post___tag___sys___type'
  | 'post___tag___sys___revision'
  | 'post___tag___parent___id'
  | 'post___tag___parent___children'
  | 'post___tag___children'
  | 'post___tag___children___id'
  | 'post___tag___children___children'
  | 'post___tag___internal___content'
  | 'post___tag___internal___contentDigest'
  | 'post___tag___internal___description'
  | 'post___tag___internal___fieldOwners'
  | 'post___tag___internal___ignoreType'
  | 'post___tag___internal___mediaType'
  | 'post___tag___internal___owner'
  | 'post___tag___internal___type'
  | 'post___spaceId'
  | 'post___createdAt'
  | 'post___updatedAt'
  | 'post___sys___type'
  | 'post___sys___revision'
  | 'post___parent___id'
  | 'post___parent___parent___id'
  | 'post___parent___parent___children'
  | 'post___parent___children'
  | 'post___parent___children___id'
  | 'post___parent___children___children'
  | 'post___parent___internal___content'
  | 'post___parent___internal___contentDigest'
  | 'post___parent___internal___description'
  | 'post___parent___internal___fieldOwners'
  | 'post___parent___internal___ignoreType'
  | 'post___parent___internal___mediaType'
  | 'post___parent___internal___owner'
  | 'post___parent___internal___type'
  | 'post___children'
  | 'post___children___id'
  | 'post___children___parent___id'
  | 'post___children___parent___children'
  | 'post___children___children'
  | 'post___children___children___id'
  | 'post___children___children___children'
  | 'post___children___internal___content'
  | 'post___children___internal___contentDigest'
  | 'post___children___internal___description'
  | 'post___children___internal___fieldOwners'
  | 'post___children___internal___ignoreType'
  | 'post___children___internal___mediaType'
  | 'post___children___internal___owner'
  | 'post___children___internal___type'
  | 'post___internal___content'
  | 'post___internal___contentDigest'
  | 'post___internal___description'
  | 'post___internal___fieldOwners'
  | 'post___internal___ignoreType'
  | 'post___internal___mediaType'
  | 'post___internal___owner'
  | 'post___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulTagFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch?: Maybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagSysContentType>;
};

export type ContentfulTagSysContentType = {
  sys?: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollection = Node & {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  image?: Maybe<MediumCollectionImage>;
  metadata?: Maybe<MediumCollectionMetadata>;
  virtuals?: Maybe<MediumCollectionVirtuals>;
  logo?: Maybe<MediumCollectionLogo>;
  twitterUsername?: Maybe<Scalars['String']>;
  facebookPageName?: Maybe<Scalars['String']>;
  publicEmail?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<MediumCollectionSections>>>;
  tintColor?: Maybe<Scalars['String']>;
  lightText?: Maybe<Scalars['Boolean']>;
  favicon?: Maybe<MediumCollectionFavicon>;
  colorPalette?: Maybe<MediumCollectionColorPalette>;
  navItems?: Maybe<Array<Maybe<MediumCollectionNavItems>>>;
  colorBehavior?: Maybe<Scalars['Int']>;
  instantArticlesState?: Maybe<Scalars['Int']>;
  acceleratedMobilePagesState?: Maybe<Scalars['Int']>;
  ampLogo?: Maybe<MediumCollectionAmpLogo>;
  header?: Maybe<MediumCollectionHeader>;
  paidForDomainAt?: Maybe<Scalars['Date']>;
  subscriberCount?: Maybe<Scalars['Int']>;
  tagline?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumCollectionPaidForDomainAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionAmpLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionAmpLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionColorPalette = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrum>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrum>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrum>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteFilterInput = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrumFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumCollectionGroupConnection>;
};


export type MediumCollectionConnectionDistinctArgs = {
  field: MediumCollectionFieldsEnum;
};


export type MediumCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumCollectionFieldsEnum;
};

export type MediumCollectionEdge = {
  next?: Maybe<MediumCollection>;
  node: MediumCollection;
  previous?: Maybe<MediumCollection>;
};

export type MediumCollectionFavicon = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionFaviconFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionFieldsEnum = 
  | 'name'
  | 'slug'
  | 'tags'
  | 'creatorId'
  | 'description'
  | 'shortDescription'
  | 'image___imageId'
  | 'image___filter'
  | 'image___backgroundSize'
  | 'image___originalWidth'
  | 'image___originalHeight'
  | 'image___strategy'
  | 'image___height'
  | 'image___width'
  | 'metadata___followerCount'
  | 'metadata___activeAt'
  | 'virtuals___permissions___canPublish'
  | 'virtuals___permissions___canPublishAll'
  | 'virtuals___permissions___canRepublish'
  | 'virtuals___permissions___canRemove'
  | 'virtuals___permissions___canManageAll'
  | 'virtuals___permissions___canSubmit'
  | 'virtuals___permissions___canEditPosts'
  | 'virtuals___permissions___canAddWriters'
  | 'virtuals___permissions___canViewStats'
  | 'virtuals___permissions___canSendNewsletter'
  | 'virtuals___permissions___canViewLockedPosts'
  | 'virtuals___permissions___canViewCloaked'
  | 'virtuals___permissions___canEditOwnPosts'
  | 'virtuals___permissions___canBeAssignedAuthor'
  | 'virtuals___permissions___canEnrollInHightower'
  | 'virtuals___permissions___canLockPostsForMediumMembers'
  | 'virtuals___permissions___canLockOwnPostsForMediumMembers'
  | 'virtuals___permissions___canViewNewsletterV2Stats'
  | 'virtuals___permissions___canCreateNewsletterV3'
  | 'virtuals___isSubscribed'
  | 'virtuals___isEnrolledInHightower'
  | 'virtuals___isEligibleForHightower'
  | 'virtuals___isSubscribedToCollectionEmails'
  | 'virtuals___isMuted'
  | 'virtuals___canToggleEmail'
  | 'logo___imageId'
  | 'logo___filter'
  | 'logo___backgroundSize'
  | 'logo___originalWidth'
  | 'logo___originalHeight'
  | 'logo___strategy'
  | 'logo___height'
  | 'logo___width'
  | 'twitterUsername'
  | 'facebookPageName'
  | 'publicEmail'
  | 'domain'
  | 'sections'
  | 'sections___type'
  | 'sections___collectionHeaderMetadata___title'
  | 'sections___collectionHeaderMetadata___description'
  | 'sections___collectionHeaderMetadata___backgroundImage___id'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalWidth'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalHeight'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentX'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentY'
  | 'sections___collectionHeaderMetadata___logoImage___id'
  | 'sections___collectionHeaderMetadata___logoImage___originalWidth'
  | 'sections___collectionHeaderMetadata___logoImage___originalHeight'
  | 'sections___collectionHeaderMetadata___logoImage___alt'
  | 'sections___collectionHeaderMetadata___alignment'
  | 'sections___collectionHeaderMetadata___layout'
  | 'sections___postListMetadata___source'
  | 'sections___postListMetadata___layout'
  | 'sections___postListMetadata___number'
  | 'tintColor'
  | 'lightText'
  | 'favicon___imageId'
  | 'favicon___filter'
  | 'favicon___backgroundSize'
  | 'favicon___originalWidth'
  | 'favicon___originalHeight'
  | 'favicon___strategy'
  | 'favicon___height'
  | 'favicon___width'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___defaultBackgroundSpectrum___backgroundColor'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___tintBackgroundSpectrum___backgroundColor'
  | 'colorPalette___highlightSpectrum___colorPoints'
  | 'colorPalette___highlightSpectrum___colorPoints___color'
  | 'colorPalette___highlightSpectrum___colorPoints___point'
  | 'colorPalette___highlightSpectrum___backgroundColor'
  | 'navItems'
  | 'navItems___type'
  | 'navItems___title'
  | 'navItems___url'
  | 'navItems___topicId'
  | 'navItems___source'
  | 'colorBehavior'
  | 'instantArticlesState'
  | 'acceleratedMobilePagesState'
  | 'ampLogo___imageId'
  | 'ampLogo___filter'
  | 'ampLogo___backgroundSize'
  | 'ampLogo___originalWidth'
  | 'ampLogo___originalHeight'
  | 'ampLogo___strategy'
  | 'ampLogo___height'
  | 'ampLogo___width'
  | 'header___title'
  | 'header___description'
  | 'header___backgroundImage___id'
  | 'header___backgroundImage___originalWidth'
  | 'header___backgroundImage___originalHeight'
  | 'header___backgroundImage___focusPercentX'
  | 'header___backgroundImage___focusPercentY'
  | 'header___logoImage___id'
  | 'header___logoImage___originalWidth'
  | 'header___logoImage___originalHeight'
  | 'header___logoImage___alt'
  | 'header___alignment'
  | 'header___layout'
  | 'paidForDomainAt'
  | 'subscriberCount'
  | 'tagline'
  | 'type'
  | 'medium_id'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumCollectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeader = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImage>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionHeaderBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionHeaderBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionHeaderFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionHeaderLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeaderLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionMetadata = {
  followerCount?: Maybe<Scalars['Int']>;
  activeAt?: Maybe<Scalars['Date']>;
};


export type MediumCollectionMetadataActiveAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionMetadataFilterInput = {
  followerCount?: Maybe<IntQueryOperatorInput>;
  activeAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumCollectionNavItems = {
  type?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type MediumCollectionNavItemsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  topicId?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionNavItemsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionNavItemsFilterInput>;
};

export type MediumCollectionSections = {
  type?: Maybe<Scalars['Int']>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadata>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadata>;
};

export type MediumCollectionSectionsCollectionHeaderMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionSectionsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataFilterInput>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadataFilterInput>;
};

export type MediumCollectionSectionsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionSectionsFilterInput>;
};

export type MediumCollectionSectionsPostListMetadata = {
  source?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsPostListMetadataFilterInput = {
  source?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  number?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSortInput = {
  fields?: Maybe<Array<Maybe<MediumCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumCollectionVirtuals = {
  permissions?: Maybe<MediumCollectionVirtualsPermissions>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  isEnrolledInHightower?: Maybe<Scalars['Boolean']>;
  isEligibleForHightower?: Maybe<Scalars['Boolean']>;
  isSubscribedToCollectionEmails?: Maybe<Scalars['Boolean']>;
  isMuted?: Maybe<Scalars['Boolean']>;
  canToggleEmail?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsFilterInput = {
  permissions?: Maybe<MediumCollectionVirtualsPermissionsFilterInput>;
  isSubscribed?: Maybe<BooleanQueryOperatorInput>;
  isEnrolledInHightower?: Maybe<BooleanQueryOperatorInput>;
  isEligibleForHightower?: Maybe<BooleanQueryOperatorInput>;
  isSubscribedToCollectionEmails?: Maybe<BooleanQueryOperatorInput>;
  isMuted?: Maybe<BooleanQueryOperatorInput>;
  canToggleEmail?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumCollectionVirtualsPermissions = {
  canPublish?: Maybe<Scalars['Boolean']>;
  canPublishAll?: Maybe<Scalars['Boolean']>;
  canRepublish?: Maybe<Scalars['Boolean']>;
  canRemove?: Maybe<Scalars['Boolean']>;
  canManageAll?: Maybe<Scalars['Boolean']>;
  canSubmit?: Maybe<Scalars['Boolean']>;
  canEditPosts?: Maybe<Scalars['Boolean']>;
  canAddWriters?: Maybe<Scalars['Boolean']>;
  canViewStats?: Maybe<Scalars['Boolean']>;
  canSendNewsletter?: Maybe<Scalars['Boolean']>;
  canViewLockedPosts?: Maybe<Scalars['Boolean']>;
  canViewCloaked?: Maybe<Scalars['Boolean']>;
  canEditOwnPosts?: Maybe<Scalars['Boolean']>;
  canBeAssignedAuthor?: Maybe<Scalars['Boolean']>;
  canEnrollInHightower?: Maybe<Scalars['Boolean']>;
  canLockPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canLockOwnPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canViewNewsletterV2Stats?: Maybe<Scalars['Boolean']>;
  canCreateNewsletterV3?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsPermissionsFilterInput = {
  canPublish?: Maybe<BooleanQueryOperatorInput>;
  canPublishAll?: Maybe<BooleanQueryOperatorInput>;
  canRepublish?: Maybe<BooleanQueryOperatorInput>;
  canRemove?: Maybe<BooleanQueryOperatorInput>;
  canManageAll?: Maybe<BooleanQueryOperatorInput>;
  canSubmit?: Maybe<BooleanQueryOperatorInput>;
  canEditPosts?: Maybe<BooleanQueryOperatorInput>;
  canAddWriters?: Maybe<BooleanQueryOperatorInput>;
  canViewStats?: Maybe<BooleanQueryOperatorInput>;
  canSendNewsletter?: Maybe<BooleanQueryOperatorInput>;
  canViewLockedPosts?: Maybe<BooleanQueryOperatorInput>;
  canViewCloaked?: Maybe<BooleanQueryOperatorInput>;
  canEditOwnPosts?: Maybe<BooleanQueryOperatorInput>;
  canBeAssignedAuthor?: Maybe<BooleanQueryOperatorInput>;
  canEnrollInHightower?: Maybe<BooleanQueryOperatorInput>;
  canLockPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canLockOwnPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canViewNewsletterV2Stats?: Maybe<BooleanQueryOperatorInput>;
  canCreateNewsletterV3?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPost = Node & {
  versionId?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  homeCollectionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  detectedLanguage?: Maybe<Scalars['String']>;
  latestVersion?: Maybe<Scalars['String']>;
  latestPublishedVersion?: Maybe<Scalars['String']>;
  hasUnpublishedEdits?: Maybe<Scalars['Boolean']>;
  latestRev?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  acceptedAt?: Maybe<Scalars['Int']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  latestPublishedAt?: Maybe<Scalars['Date']>;
  vote?: Maybe<Scalars['Boolean']>;
  experimentalCss?: Maybe<Scalars['String']>;
  displayAuthor?: Maybe<Scalars['String']>;
  content?: Maybe<MediumPostContent>;
  virtuals?: Maybe<MediumPostVirtuals>;
  coverless?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  translationSourcePostId?: Maybe<Scalars['String']>;
  translationSourceCreatorId?: Maybe<Scalars['String']>;
  isApprovedTranslation?: Maybe<Scalars['Boolean']>;
  inResponseToPostId?: Maybe<Scalars['String']>;
  inResponseToRemovedAt?: Maybe<Scalars['Int']>;
  isTitleSynthesized?: Maybe<Scalars['Boolean']>;
  allowResponses?: Maybe<Scalars['Boolean']>;
  importedUrl?: Maybe<Scalars['String']>;
  importedPublishedAt?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  uniqueSlug?: Maybe<Scalars['String']>;
  previewContent?: Maybe<MediumPostPreviewContent>;
  license?: Maybe<Scalars['Int']>;
  inResponseToMediaResourceId?: Maybe<Scalars['String']>;
  canonicalUrl?: Maybe<Scalars['String']>;
  approvedHomeCollectionId?: Maybe<Scalars['String']>;
  newsletterId?: Maybe<Scalars['String']>;
  webCanonicalUrl?: Maybe<Scalars['String']>;
  mediumUrl?: Maybe<Scalars['String']>;
  migrationId?: Maybe<Scalars['String']>;
  notifyFollowers?: Maybe<Scalars['Boolean']>;
  notifyTwitter?: Maybe<Scalars['Boolean']>;
  notifyFacebook?: Maybe<Scalars['Boolean']>;
  responseHiddenOnParentPostAt?: Maybe<Scalars['Int']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  isSubscriptionLocked?: Maybe<Scalars['Boolean']>;
  seriesLastAppendedAt?: Maybe<Scalars['Date']>;
  audioVersionDurationSec?: Maybe<Scalars['Int']>;
  sequenceId?: Maybe<Scalars['String']>;
  isEligibleForRevenue?: Maybe<Scalars['Boolean']>;
  isBlockedFromHightower?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Int']>;
  lockedPostSource?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<Scalars['Int']>;
  featureLockRequestAcceptedAt?: Maybe<Scalars['Int']>;
  mongerRequestType?: Maybe<Scalars['Int']>;
  layerCake?: Maybe<Scalars['Int']>;
  socialTitle?: Maybe<Scalars['String']>;
  socialDek?: Maybe<Scalars['String']>;
  editorialPreviewTitle?: Maybe<Scalars['String']>;
  editorialPreviewDek?: Maybe<Scalars['String']>;
  isProxyPost?: Maybe<Scalars['Boolean']>;
  proxyPostFaviconUrl?: Maybe<Scalars['String']>;
  proxyPostProviderName?: Maybe<Scalars['String']>;
  proxyPostType?: Maybe<Scalars['Int']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isLimitedState?: Maybe<Scalars['Boolean']>;
  seoTitle?: Maybe<Scalars['String']>;
  previewContent2?: Maybe<MediumPostPreviewContent2>;
  cardType?: Maybe<Scalars['Int']>;
  isDistributionAlertDismissed?: Maybe<Scalars['Boolean']>;
  isShortform?: Maybe<Scalars['Boolean']>;
  shortformType?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  author?: Maybe<MediumUser>;
  primaryTopicId?: Maybe<Scalars['String']>;
  isNewsletter?: Maybe<Scalars['Boolean']>;
  curationEligibleAt?: Maybe<Scalars['Date']>;
  responsesLocked?: Maybe<Scalars['Boolean']>;
  isLockedResponse?: Maybe<Scalars['Boolean']>;
  isPublishToEmail?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostLatestPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostSeriesLastAppendedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostCurationEligibleAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumPostGroupConnection>;
};


export type MediumPostConnectionDistinctArgs = {
  field: MediumPostFieldsEnum;
};


export type MediumPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumPostFieldsEnum;
};

export type MediumPostContent = {
  subtitle?: Maybe<Scalars['String']>;
  postDisplay?: Maybe<MediumPostContentPostDisplay>;
  metaDescription?: Maybe<Scalars['String']>;
};

export type MediumPostContentFilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  postDisplay?: Maybe<MediumPostContentPostDisplayFilterInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostContentPostDisplay = {
  coverless?: Maybe<Scalars['Boolean']>;
};

export type MediumPostContentPostDisplayFilterInput = {
  coverless?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostEdge = {
  next?: Maybe<MediumPost>;
  node: MediumPost;
  previous?: Maybe<MediumPost>;
};

export type MediumPostFieldsEnum = 
  | 'versionId'
  | 'creatorId'
  | 'homeCollectionId'
  | 'title'
  | 'detectedLanguage'
  | 'latestVersion'
  | 'latestPublishedVersion'
  | 'hasUnpublishedEdits'
  | 'latestRev'
  | 'createdAt'
  | 'updatedAt'
  | 'acceptedAt'
  | 'firstPublishedAt'
  | 'latestPublishedAt'
  | 'vote'
  | 'experimentalCss'
  | 'displayAuthor'
  | 'content___subtitle'
  | 'content___postDisplay___coverless'
  | 'content___metaDescription'
  | 'virtuals___statusForCollection'
  | 'virtuals___allowNotes'
  | 'virtuals___previewImage___imageId'
  | 'virtuals___previewImage___filter'
  | 'virtuals___previewImage___backgroundSize'
  | 'virtuals___previewImage___originalWidth'
  | 'virtuals___previewImage___originalHeight'
  | 'virtuals___previewImage___strategy'
  | 'virtuals___previewImage___height'
  | 'virtuals___previewImage___width'
  | 'virtuals___wordCount'
  | 'virtuals___imageCount'
  | 'virtuals___readingTime'
  | 'virtuals___subtitle'
  | 'virtuals___publishedInCount'
  | 'virtuals___noIndex'
  | 'virtuals___recommends'
  | 'virtuals___isBookmarked'
  | 'virtuals___tags'
  | 'virtuals___tags___slug'
  | 'virtuals___tags___name'
  | 'virtuals___tags___postCount'
  | 'virtuals___tags___metadata___postCount'
  | 'virtuals___tags___type'
  | 'virtuals___socialRecommendsCount'
  | 'virtuals___responsesCreatedCount'
  | 'virtuals___links___entries'
  | 'virtuals___links___entries___url'
  | 'virtuals___links___entries___alts'
  | 'virtuals___links___entries___httpStatus'
  | 'virtuals___links___version'
  | 'virtuals___links___generatedAt'
  | 'virtuals___isLockedPreviewOnly'
  | 'virtuals___metaDescription'
  | 'virtuals___totalClapCount'
  | 'virtuals___sectionCount'
  | 'virtuals___readingList'
  | 'virtuals___topics'
  | 'virtuals___topics___topicId'
  | 'virtuals___topics___slug'
  | 'virtuals___topics___createdAt'
  | 'virtuals___topics___deletedAt'
  | 'virtuals___topics___image___id'
  | 'virtuals___topics___image___originalWidth'
  | 'virtuals___topics___image___originalHeight'
  | 'virtuals___topics___name'
  | 'virtuals___topics___description'
  | 'virtuals___topics___visibility'
  | 'virtuals___topics___type'
  | 'coverless'
  | 'slug'
  | 'translationSourcePostId'
  | 'translationSourceCreatorId'
  | 'isApprovedTranslation'
  | 'inResponseToPostId'
  | 'inResponseToRemovedAt'
  | 'isTitleSynthesized'
  | 'allowResponses'
  | 'importedUrl'
  | 'importedPublishedAt'
  | 'visibility'
  | 'uniqueSlug'
  | 'previewContent___bodyModel___paragraphs'
  | 'previewContent___bodyModel___paragraphs___name'
  | 'previewContent___bodyModel___paragraphs___type'
  | 'previewContent___bodyModel___paragraphs___text'
  | 'previewContent___bodyModel___paragraphs___layout'
  | 'previewContent___bodyModel___paragraphs___markups'
  | 'previewContent___bodyModel___paragraphs___alignment'
  | 'previewContent___bodyModel___paragraphs___hasDropCap'
  | 'previewContent___bodyModel___sections'
  | 'previewContent___bodyModel___sections___startIndex'
  | 'previewContent___isFullContent'
  | 'previewContent___subtitle'
  | 'license'
  | 'inResponseToMediaResourceId'
  | 'canonicalUrl'
  | 'approvedHomeCollectionId'
  | 'newsletterId'
  | 'webCanonicalUrl'
  | 'mediumUrl'
  | 'migrationId'
  | 'notifyFollowers'
  | 'notifyTwitter'
  | 'notifyFacebook'
  | 'responseHiddenOnParentPostAt'
  | 'isSeries'
  | 'isSubscriptionLocked'
  | 'seriesLastAppendedAt'
  | 'audioVersionDurationSec'
  | 'sequenceId'
  | 'isEligibleForRevenue'
  | 'isBlockedFromHightower'
  | 'deletedAt'
  | 'lockedPostSource'
  | 'hightowerMinimumGuaranteeStartsAt'
  | 'hightowerMinimumGuaranteeEndsAt'
  | 'featureLockRequestAcceptedAt'
  | 'mongerRequestType'
  | 'layerCake'
  | 'socialTitle'
  | 'socialDek'
  | 'editorialPreviewTitle'
  | 'editorialPreviewDek'
  | 'isProxyPost'
  | 'proxyPostFaviconUrl'
  | 'proxyPostProviderName'
  | 'proxyPostType'
  | 'isSuspended'
  | 'isLimitedState'
  | 'seoTitle'
  | 'previewContent2___bodyModel___paragraphs'
  | 'previewContent2___bodyModel___paragraphs___name'
  | 'previewContent2___bodyModel___paragraphs___type'
  | 'previewContent2___bodyModel___paragraphs___text'
  | 'previewContent2___bodyModel___paragraphs___markups'
  | 'previewContent2___bodyModel___paragraphs___layout'
  | 'previewContent2___bodyModel___paragraphs___hasDropCap'
  | 'previewContent2___bodyModel___sections'
  | 'previewContent2___bodyModel___sections___startIndex'
  | 'previewContent2___bodyModel___sections___name'
  | 'previewContent2___isFullContent'
  | 'previewContent2___subtitle'
  | 'cardType'
  | 'isDistributionAlertDismissed'
  | 'isShortform'
  | 'shortformType'
  | 'type'
  | 'medium_id'
  | 'author___userId'
  | 'author___name'
  | 'author___username'
  | 'author___mediumMemberAt'
  | 'author___createdAt'
  | 'author___imageId'
  | 'author___backgroundImageId'
  | 'author___bio'
  | 'author___twitterScreenName'
  | 'author___allowNotes'
  | 'author___isWriterProgramEnrolled'
  | 'author___isSuspended'
  | 'author___isMembershipTrialEligible'
  | 'author___type'
  | 'author___posts'
  | 'author___posts___versionId'
  | 'author___posts___creatorId'
  | 'author___posts___homeCollectionId'
  | 'author___posts___title'
  | 'author___posts___detectedLanguage'
  | 'author___posts___latestVersion'
  | 'author___posts___latestPublishedVersion'
  | 'author___posts___hasUnpublishedEdits'
  | 'author___posts___latestRev'
  | 'author___posts___createdAt'
  | 'author___posts___updatedAt'
  | 'author___posts___acceptedAt'
  | 'author___posts___firstPublishedAt'
  | 'author___posts___latestPublishedAt'
  | 'author___posts___vote'
  | 'author___posts___experimentalCss'
  | 'author___posts___displayAuthor'
  | 'author___posts___content___subtitle'
  | 'author___posts___content___metaDescription'
  | 'author___posts___virtuals___statusForCollection'
  | 'author___posts___virtuals___allowNotes'
  | 'author___posts___virtuals___wordCount'
  | 'author___posts___virtuals___imageCount'
  | 'author___posts___virtuals___readingTime'
  | 'author___posts___virtuals___subtitle'
  | 'author___posts___virtuals___publishedInCount'
  | 'author___posts___virtuals___noIndex'
  | 'author___posts___virtuals___recommends'
  | 'author___posts___virtuals___isBookmarked'
  | 'author___posts___virtuals___tags'
  | 'author___posts___virtuals___socialRecommendsCount'
  | 'author___posts___virtuals___responsesCreatedCount'
  | 'author___posts___virtuals___isLockedPreviewOnly'
  | 'author___posts___virtuals___metaDescription'
  | 'author___posts___virtuals___totalClapCount'
  | 'author___posts___virtuals___sectionCount'
  | 'author___posts___virtuals___readingList'
  | 'author___posts___virtuals___topics'
  | 'author___posts___coverless'
  | 'author___posts___slug'
  | 'author___posts___translationSourcePostId'
  | 'author___posts___translationSourceCreatorId'
  | 'author___posts___isApprovedTranslation'
  | 'author___posts___inResponseToPostId'
  | 'author___posts___inResponseToRemovedAt'
  | 'author___posts___isTitleSynthesized'
  | 'author___posts___allowResponses'
  | 'author___posts___importedUrl'
  | 'author___posts___importedPublishedAt'
  | 'author___posts___visibility'
  | 'author___posts___uniqueSlug'
  | 'author___posts___previewContent___isFullContent'
  | 'author___posts___previewContent___subtitle'
  | 'author___posts___license'
  | 'author___posts___inResponseToMediaResourceId'
  | 'author___posts___canonicalUrl'
  | 'author___posts___approvedHomeCollectionId'
  | 'author___posts___newsletterId'
  | 'author___posts___webCanonicalUrl'
  | 'author___posts___mediumUrl'
  | 'author___posts___migrationId'
  | 'author___posts___notifyFollowers'
  | 'author___posts___notifyTwitter'
  | 'author___posts___notifyFacebook'
  | 'author___posts___responseHiddenOnParentPostAt'
  | 'author___posts___isSeries'
  | 'author___posts___isSubscriptionLocked'
  | 'author___posts___seriesLastAppendedAt'
  | 'author___posts___audioVersionDurationSec'
  | 'author___posts___sequenceId'
  | 'author___posts___isEligibleForRevenue'
  | 'author___posts___isBlockedFromHightower'
  | 'author___posts___deletedAt'
  | 'author___posts___lockedPostSource'
  | 'author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'author___posts___featureLockRequestAcceptedAt'
  | 'author___posts___mongerRequestType'
  | 'author___posts___layerCake'
  | 'author___posts___socialTitle'
  | 'author___posts___socialDek'
  | 'author___posts___editorialPreviewTitle'
  | 'author___posts___editorialPreviewDek'
  | 'author___posts___isProxyPost'
  | 'author___posts___proxyPostFaviconUrl'
  | 'author___posts___proxyPostProviderName'
  | 'author___posts___proxyPostType'
  | 'author___posts___isSuspended'
  | 'author___posts___isLimitedState'
  | 'author___posts___seoTitle'
  | 'author___posts___previewContent2___isFullContent'
  | 'author___posts___previewContent2___subtitle'
  | 'author___posts___cardType'
  | 'author___posts___isDistributionAlertDismissed'
  | 'author___posts___isShortform'
  | 'author___posts___shortformType'
  | 'author___posts___type'
  | 'author___posts___medium_id'
  | 'author___posts___author___userId'
  | 'author___posts___author___name'
  | 'author___posts___author___username'
  | 'author___posts___author___mediumMemberAt'
  | 'author___posts___author___createdAt'
  | 'author___posts___author___imageId'
  | 'author___posts___author___backgroundImageId'
  | 'author___posts___author___bio'
  | 'author___posts___author___twitterScreenName'
  | 'author___posts___author___allowNotes'
  | 'author___posts___author___isWriterProgramEnrolled'
  | 'author___posts___author___isSuspended'
  | 'author___posts___author___isMembershipTrialEligible'
  | 'author___posts___author___type'
  | 'author___posts___author___posts'
  | 'author___posts___author___optInToIceland'
  | 'author___posts___author___hasCompletedProfile'
  | 'author___posts___author___id'
  | 'author___posts___author___children'
  | 'author___posts___primaryTopicId'
  | 'author___posts___isNewsletter'
  | 'author___posts___curationEligibleAt'
  | 'author___posts___responsesLocked'
  | 'author___posts___isLockedResponse'
  | 'author___posts___isPublishToEmail'
  | 'author___posts___id'
  | 'author___posts___parent___id'
  | 'author___posts___parent___children'
  | 'author___posts___children'
  | 'author___posts___children___id'
  | 'author___posts___children___children'
  | 'author___posts___internal___content'
  | 'author___posts___internal___contentDigest'
  | 'author___posts___internal___description'
  | 'author___posts___internal___fieldOwners'
  | 'author___posts___internal___ignoreType'
  | 'author___posts___internal___mediaType'
  | 'author___posts___internal___owner'
  | 'author___posts___internal___type'
  | 'author___optInToIceland'
  | 'author___hasCompletedProfile'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'primaryTopicId'
  | 'isNewsletter'
  | 'curationEligibleAt'
  | 'responsesLocked'
  | 'isLockedResponse'
  | 'isPublishToEmail'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumPostFilterInput = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  curationEligibleAt?: Maybe<DateQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumPostFilterListInput = {
  elemMatch?: Maybe<MediumPostFilterInput>;
};

export type MediumPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2 = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelSections>>>;
};

export type MediumPostPreviewContent2BodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkups>>>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadata>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  markups?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  anchorType?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  anchorType?: Maybe<IntQueryOperatorInput>;
  userId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContent2FilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelSections>>>;
};

export type MediumPostPreviewContentBodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContentBodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadata>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphsMarkups>>>;
  alignment?: Maybe<Scalars['Int']>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput>;
  markups?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContentFilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostSortInput = {
  fields?: Maybe<Array<Maybe<MediumPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumPostVirtuals = {
  statusForCollection?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Boolean']>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImage>;
  wordCount?: Maybe<Scalars['Int']>;
  imageCount?: Maybe<Scalars['Int']>;
  readingTime?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  publishedInCount?: Maybe<Scalars['Int']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  recommends?: Maybe<Scalars['Int']>;
  isBookmarked?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<MediumPostVirtualsTags>>>;
  socialRecommendsCount?: Maybe<Scalars['Int']>;
  responsesCreatedCount?: Maybe<Scalars['Int']>;
  links?: Maybe<MediumPostVirtualsLinks>;
  isLockedPreviewOnly?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  totalClapCount?: Maybe<Scalars['Int']>;
  sectionCount?: Maybe<Scalars['Int']>;
  readingList?: Maybe<Scalars['Int']>;
  topics?: Maybe<Array<Maybe<MediumPostVirtualsTopics>>>;
};

export type MediumPostVirtualsFilterInput = {
  statusForCollection?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<BooleanQueryOperatorInput>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImageFilterInput>;
  wordCount?: Maybe<IntQueryOperatorInput>;
  imageCount?: Maybe<IntQueryOperatorInput>;
  readingTime?: Maybe<FloatQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  publishedInCount?: Maybe<IntQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  recommends?: Maybe<IntQueryOperatorInput>;
  isBookmarked?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<MediumPostVirtualsTagsFilterListInput>;
  socialRecommendsCount?: Maybe<IntQueryOperatorInput>;
  responsesCreatedCount?: Maybe<IntQueryOperatorInput>;
  links?: Maybe<MediumPostVirtualsLinksFilterInput>;
  isLockedPreviewOnly?: Maybe<BooleanQueryOperatorInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
  totalClapCount?: Maybe<IntQueryOperatorInput>;
  sectionCount?: Maybe<IntQueryOperatorInput>;
  readingList?: Maybe<IntQueryOperatorInput>;
  topics?: Maybe<MediumPostVirtualsTopicsFilterListInput>;
};

export type MediumPostVirtualsLinks = {
  entries?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntries>>>;
  version?: Maybe<Scalars['String']>;
  generatedAt?: Maybe<Scalars['Date']>;
};


export type MediumPostVirtualsLinksGeneratedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntries = {
  url?: Maybe<Scalars['String']>;
  alts?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntriesAlts>>>;
  httpStatus?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsLinksEntriesAlts = {
  type?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterInput>;
};

export type MediumPostVirtualsLinksEntriesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  alts?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterListInput>;
  httpStatus?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesFilterInput>;
};

export type MediumPostVirtualsLinksFilterInput = {
  entries?: Maybe<MediumPostVirtualsLinksEntriesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
  generatedAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumPostVirtualsPreviewImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsPreviewImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsTags = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadata>;
  type?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTagsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadataFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTagsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTagsFilterInput>;
};

export type MediumPostVirtualsTagsMetadata = {
  postCount?: Maybe<Scalars['Int']>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImage>;
};

export type MediumPostVirtualsTagsMetadataCoverImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTagsMetadataCoverImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTagsMetadataFilterInput = {
  postCount?: Maybe<IntQueryOperatorInput>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImageFilterInput>;
};

export type MediumPostVirtualsTopics = {
  topicId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Int']>;
  image?: Maybe<MediumPostVirtualsTopicsImage>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type MediumPostVirtualsTopicsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTopicsFilterInput = {
  topicId?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<MediumPostVirtualsTopicsImageFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTopicsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTopicsFilterInput>;
};

export type MediumPostVirtualsTopicsImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsTopicsImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
};

export type MediumUser = Node & {
  userId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  mediumMemberAt?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  imageId?: Maybe<Scalars['String']>;
  backgroundImageId?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  twitterScreenName?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Int']>;
  isWriterProgramEnrolled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isMembershipTrialEligible?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<MediumPost>>>;
  optInToIceland?: Maybe<Scalars['Boolean']>;
  hasCompletedProfile?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumUserCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumUserGroupConnection>;
};


export type MediumUserConnectionDistinctArgs = {
  field: MediumUserFieldsEnum;
};


export type MediumUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumUserFieldsEnum;
};

export type MediumUserEdge = {
  next?: Maybe<MediumUser>;
  node: MediumUser;
  previous?: Maybe<MediumUser>;
};

export type MediumUserFieldsEnum = 
  | 'userId'
  | 'name'
  | 'username'
  | 'mediumMemberAt'
  | 'createdAt'
  | 'imageId'
  | 'backgroundImageId'
  | 'bio'
  | 'twitterScreenName'
  | 'allowNotes'
  | 'isWriterProgramEnrolled'
  | 'isSuspended'
  | 'isMembershipTrialEligible'
  | 'type'
  | 'posts'
  | 'posts___versionId'
  | 'posts___creatorId'
  | 'posts___homeCollectionId'
  | 'posts___title'
  | 'posts___detectedLanguage'
  | 'posts___latestVersion'
  | 'posts___latestPublishedVersion'
  | 'posts___hasUnpublishedEdits'
  | 'posts___latestRev'
  | 'posts___createdAt'
  | 'posts___updatedAt'
  | 'posts___acceptedAt'
  | 'posts___firstPublishedAt'
  | 'posts___latestPublishedAt'
  | 'posts___vote'
  | 'posts___experimentalCss'
  | 'posts___displayAuthor'
  | 'posts___content___subtitle'
  | 'posts___content___postDisplay___coverless'
  | 'posts___content___metaDescription'
  | 'posts___virtuals___statusForCollection'
  | 'posts___virtuals___allowNotes'
  | 'posts___virtuals___previewImage___imageId'
  | 'posts___virtuals___previewImage___filter'
  | 'posts___virtuals___previewImage___backgroundSize'
  | 'posts___virtuals___previewImage___originalWidth'
  | 'posts___virtuals___previewImage___originalHeight'
  | 'posts___virtuals___previewImage___strategy'
  | 'posts___virtuals___previewImage___height'
  | 'posts___virtuals___previewImage___width'
  | 'posts___virtuals___wordCount'
  | 'posts___virtuals___imageCount'
  | 'posts___virtuals___readingTime'
  | 'posts___virtuals___subtitle'
  | 'posts___virtuals___publishedInCount'
  | 'posts___virtuals___noIndex'
  | 'posts___virtuals___recommends'
  | 'posts___virtuals___isBookmarked'
  | 'posts___virtuals___tags'
  | 'posts___virtuals___tags___slug'
  | 'posts___virtuals___tags___name'
  | 'posts___virtuals___tags___postCount'
  | 'posts___virtuals___tags___type'
  | 'posts___virtuals___socialRecommendsCount'
  | 'posts___virtuals___responsesCreatedCount'
  | 'posts___virtuals___links___entries'
  | 'posts___virtuals___links___version'
  | 'posts___virtuals___links___generatedAt'
  | 'posts___virtuals___isLockedPreviewOnly'
  | 'posts___virtuals___metaDescription'
  | 'posts___virtuals___totalClapCount'
  | 'posts___virtuals___sectionCount'
  | 'posts___virtuals___readingList'
  | 'posts___virtuals___topics'
  | 'posts___virtuals___topics___topicId'
  | 'posts___virtuals___topics___slug'
  | 'posts___virtuals___topics___createdAt'
  | 'posts___virtuals___topics___deletedAt'
  | 'posts___virtuals___topics___name'
  | 'posts___virtuals___topics___description'
  | 'posts___virtuals___topics___visibility'
  | 'posts___virtuals___topics___type'
  | 'posts___coverless'
  | 'posts___slug'
  | 'posts___translationSourcePostId'
  | 'posts___translationSourceCreatorId'
  | 'posts___isApprovedTranslation'
  | 'posts___inResponseToPostId'
  | 'posts___inResponseToRemovedAt'
  | 'posts___isTitleSynthesized'
  | 'posts___allowResponses'
  | 'posts___importedUrl'
  | 'posts___importedPublishedAt'
  | 'posts___visibility'
  | 'posts___uniqueSlug'
  | 'posts___previewContent___bodyModel___paragraphs'
  | 'posts___previewContent___bodyModel___sections'
  | 'posts___previewContent___isFullContent'
  | 'posts___previewContent___subtitle'
  | 'posts___license'
  | 'posts___inResponseToMediaResourceId'
  | 'posts___canonicalUrl'
  | 'posts___approvedHomeCollectionId'
  | 'posts___newsletterId'
  | 'posts___webCanonicalUrl'
  | 'posts___mediumUrl'
  | 'posts___migrationId'
  | 'posts___notifyFollowers'
  | 'posts___notifyTwitter'
  | 'posts___notifyFacebook'
  | 'posts___responseHiddenOnParentPostAt'
  | 'posts___isSeries'
  | 'posts___isSubscriptionLocked'
  | 'posts___seriesLastAppendedAt'
  | 'posts___audioVersionDurationSec'
  | 'posts___sequenceId'
  | 'posts___isEligibleForRevenue'
  | 'posts___isBlockedFromHightower'
  | 'posts___deletedAt'
  | 'posts___lockedPostSource'
  | 'posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___featureLockRequestAcceptedAt'
  | 'posts___mongerRequestType'
  | 'posts___layerCake'
  | 'posts___socialTitle'
  | 'posts___socialDek'
  | 'posts___editorialPreviewTitle'
  | 'posts___editorialPreviewDek'
  | 'posts___isProxyPost'
  | 'posts___proxyPostFaviconUrl'
  | 'posts___proxyPostProviderName'
  | 'posts___proxyPostType'
  | 'posts___isSuspended'
  | 'posts___isLimitedState'
  | 'posts___seoTitle'
  | 'posts___previewContent2___bodyModel___paragraphs'
  | 'posts___previewContent2___bodyModel___sections'
  | 'posts___previewContent2___isFullContent'
  | 'posts___previewContent2___subtitle'
  | 'posts___cardType'
  | 'posts___isDistributionAlertDismissed'
  | 'posts___isShortform'
  | 'posts___shortformType'
  | 'posts___type'
  | 'posts___medium_id'
  | 'posts___author___userId'
  | 'posts___author___name'
  | 'posts___author___username'
  | 'posts___author___mediumMemberAt'
  | 'posts___author___createdAt'
  | 'posts___author___imageId'
  | 'posts___author___backgroundImageId'
  | 'posts___author___bio'
  | 'posts___author___twitterScreenName'
  | 'posts___author___allowNotes'
  | 'posts___author___isWriterProgramEnrolled'
  | 'posts___author___isSuspended'
  | 'posts___author___isMembershipTrialEligible'
  | 'posts___author___type'
  | 'posts___author___posts'
  | 'posts___author___posts___versionId'
  | 'posts___author___posts___creatorId'
  | 'posts___author___posts___homeCollectionId'
  | 'posts___author___posts___title'
  | 'posts___author___posts___detectedLanguage'
  | 'posts___author___posts___latestVersion'
  | 'posts___author___posts___latestPublishedVersion'
  | 'posts___author___posts___hasUnpublishedEdits'
  | 'posts___author___posts___latestRev'
  | 'posts___author___posts___createdAt'
  | 'posts___author___posts___updatedAt'
  | 'posts___author___posts___acceptedAt'
  | 'posts___author___posts___firstPublishedAt'
  | 'posts___author___posts___latestPublishedAt'
  | 'posts___author___posts___vote'
  | 'posts___author___posts___experimentalCss'
  | 'posts___author___posts___displayAuthor'
  | 'posts___author___posts___coverless'
  | 'posts___author___posts___slug'
  | 'posts___author___posts___translationSourcePostId'
  | 'posts___author___posts___translationSourceCreatorId'
  | 'posts___author___posts___isApprovedTranslation'
  | 'posts___author___posts___inResponseToPostId'
  | 'posts___author___posts___inResponseToRemovedAt'
  | 'posts___author___posts___isTitleSynthesized'
  | 'posts___author___posts___allowResponses'
  | 'posts___author___posts___importedUrl'
  | 'posts___author___posts___importedPublishedAt'
  | 'posts___author___posts___visibility'
  | 'posts___author___posts___uniqueSlug'
  | 'posts___author___posts___license'
  | 'posts___author___posts___inResponseToMediaResourceId'
  | 'posts___author___posts___canonicalUrl'
  | 'posts___author___posts___approvedHomeCollectionId'
  | 'posts___author___posts___newsletterId'
  | 'posts___author___posts___webCanonicalUrl'
  | 'posts___author___posts___mediumUrl'
  | 'posts___author___posts___migrationId'
  | 'posts___author___posts___notifyFollowers'
  | 'posts___author___posts___notifyTwitter'
  | 'posts___author___posts___notifyFacebook'
  | 'posts___author___posts___responseHiddenOnParentPostAt'
  | 'posts___author___posts___isSeries'
  | 'posts___author___posts___isSubscriptionLocked'
  | 'posts___author___posts___seriesLastAppendedAt'
  | 'posts___author___posts___audioVersionDurationSec'
  | 'posts___author___posts___sequenceId'
  | 'posts___author___posts___isEligibleForRevenue'
  | 'posts___author___posts___isBlockedFromHightower'
  | 'posts___author___posts___deletedAt'
  | 'posts___author___posts___lockedPostSource'
  | 'posts___author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___author___posts___featureLockRequestAcceptedAt'
  | 'posts___author___posts___mongerRequestType'
  | 'posts___author___posts___layerCake'
  | 'posts___author___posts___socialTitle'
  | 'posts___author___posts___socialDek'
  | 'posts___author___posts___editorialPreviewTitle'
  | 'posts___author___posts___editorialPreviewDek'
  | 'posts___author___posts___isProxyPost'
  | 'posts___author___posts___proxyPostFaviconUrl'
  | 'posts___author___posts___proxyPostProviderName'
  | 'posts___author___posts___proxyPostType'
  | 'posts___author___posts___isSuspended'
  | 'posts___author___posts___isLimitedState'
  | 'posts___author___posts___seoTitle'
  | 'posts___author___posts___cardType'
  | 'posts___author___posts___isDistributionAlertDismissed'
  | 'posts___author___posts___isShortform'
  | 'posts___author___posts___shortformType'
  | 'posts___author___posts___type'
  | 'posts___author___posts___medium_id'
  | 'posts___author___posts___primaryTopicId'
  | 'posts___author___posts___isNewsletter'
  | 'posts___author___posts___curationEligibleAt'
  | 'posts___author___posts___responsesLocked'
  | 'posts___author___posts___isLockedResponse'
  | 'posts___author___posts___isPublishToEmail'
  | 'posts___author___posts___id'
  | 'posts___author___posts___children'
  | 'posts___author___optInToIceland'
  | 'posts___author___hasCompletedProfile'
  | 'posts___author___id'
  | 'posts___author___parent___id'
  | 'posts___author___parent___children'
  | 'posts___author___children'
  | 'posts___author___children___id'
  | 'posts___author___children___children'
  | 'posts___author___internal___content'
  | 'posts___author___internal___contentDigest'
  | 'posts___author___internal___description'
  | 'posts___author___internal___fieldOwners'
  | 'posts___author___internal___ignoreType'
  | 'posts___author___internal___mediaType'
  | 'posts___author___internal___owner'
  | 'posts___author___internal___type'
  | 'posts___primaryTopicId'
  | 'posts___isNewsletter'
  | 'posts___curationEligibleAt'
  | 'posts___responsesLocked'
  | 'posts___isLockedResponse'
  | 'posts___isPublishToEmail'
  | 'posts___id'
  | 'posts___parent___id'
  | 'posts___parent___parent___id'
  | 'posts___parent___parent___children'
  | 'posts___parent___children'
  | 'posts___parent___children___id'
  | 'posts___parent___children___children'
  | 'posts___parent___internal___content'
  | 'posts___parent___internal___contentDigest'
  | 'posts___parent___internal___description'
  | 'posts___parent___internal___fieldOwners'
  | 'posts___parent___internal___ignoreType'
  | 'posts___parent___internal___mediaType'
  | 'posts___parent___internal___owner'
  | 'posts___parent___internal___type'
  | 'posts___children'
  | 'posts___children___id'
  | 'posts___children___parent___id'
  | 'posts___children___parent___children'
  | 'posts___children___children'
  | 'posts___children___children___id'
  | 'posts___children___children___children'
  | 'posts___children___internal___content'
  | 'posts___children___internal___contentDigest'
  | 'posts___children___internal___description'
  | 'posts___children___internal___fieldOwners'
  | 'posts___children___internal___ignoreType'
  | 'posts___children___internal___mediaType'
  | 'posts___children___internal___owner'
  | 'posts___children___internal___type'
  | 'posts___internal___content'
  | 'posts___internal___contentDigest'
  | 'posts___internal___description'
  | 'posts___internal___fieldOwners'
  | 'posts___internal___ignoreType'
  | 'posts___internal___mediaType'
  | 'posts___internal___owner'
  | 'posts___internal___type'
  | 'optInToIceland'
  | 'hasCompletedProfile'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumUserFilterInput = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumUserSortInput = {
  fields?: Maybe<Array<Maybe<MediumUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  mediumCollection?: Maybe<MediumCollection>;
  allMediumCollection: MediumCollectionConnection;
  mediumUser?: Maybe<MediumUser>;
  allMediumUser: MediumUserConnection;
  mediumPost?: Maybe<MediumPost>;
  allMediumPost: MediumPostConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulSocialLink?: Maybe<ContentfulSocialLink>;
  allContentfulSocialLink: ContentfulSocialLinkConnection;
  contentfulAbout?: Maybe<ContentfulAbout>;
  allContentfulAbout: ContentfulAboutConnection;
  contentfulPost?: Maybe<ContentfulPost>;
  allContentfulPost: ContentfulPostConnection;
  contentfulTag?: Maybe<ContentfulTag>;
  allContentfulTag: ContentfulTagConnection;
  contentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
  allContentfulAboutAboutMeTextNode: ContentfulAboutAboutMeTextNodeConnection;
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumCollectionArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumCollectionArgs = {
  filter?: Maybe<MediumCollectionFilterInput>;
  sort?: Maybe<MediumCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumUserArgs = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumUserArgs = {
  filter?: Maybe<MediumUserFilterInput>;
  sort?: Maybe<MediumUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumPostArgs = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  curationEligibleAt?: Maybe<DateQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumPostArgs = {
  filter?: Maybe<MediumPostFilterInput>;
  sort?: Maybe<MediumPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  publishedDate?: Maybe<DateQueryOperatorInput>;
  repositoryUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  about?: Maybe<ContentfulAboutFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSocialLinkArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fontAwesomeIcon?: Maybe<StringQueryOperatorInput>;
  about?: Maybe<ContentfulAboutFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSocialLinkSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSocialLinkArgs = {
  filter?: Maybe<ContentfulSocialLinkFilterInput>;
  sort?: Maybe<ContentfulSocialLinkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<StringQueryOperatorInput>;
  mediumUser?: Maybe<StringQueryOperatorInput>;
  socialLinks?: Maybe<ContentfulSocialLinkFilterListInput>;
  profile?: Maybe<ContentfulAssetFilterInput>;
  projects?: Maybe<ContentfulProjectFilterListInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
};


export type QueryAllContentfulAboutArgs = {
  filter?: Maybe<ContentfulAboutFilterInput>;
  sort?: Maybe<ContentfulAboutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulPostContentFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  tag?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>;
  sort?: Maybe<ContentfulPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulTagArgs = {
  filter?: Maybe<ContentfulTagFilterInput>;
  sort?: Maybe<ContentfulTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutAboutMeTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutMe?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutAboutMeTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAboutAboutMeTextNodeArgs = {
  filter?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  sort?: Maybe<ContentfulAboutAboutMeTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonShortBioTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSysFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___isMediumUserDefined'
  | 'siteMetadata___deterministic'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___username'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___username'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isMediumUserDefined?: Maybe<Scalars['Boolean']>;
  deterministic?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  isMediumUserDefined?: Maybe<BooleanQueryOperatorInput>;
  deterministic?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { placeholderImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type AboutMeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutMeQueryQuery = { contentfulAbout?: Maybe<{ aboutMe?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'rawMarkdownBody'>> }>, profile?: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { image?: Maybe<Pick<ContentfulResize, 'src'>> }
    )> }> };

export type HelmetQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HelmetQueryQuery = { contentfulAbout?: Maybe<(
    Pick<ContentfulAbout, 'name' | 'description'>
    & { profile?: Maybe<{ favicon16?: Maybe<Pick<ContentfulResize, 'src'>>, favicon32?: Maybe<Pick<ContentfulResize, 'src'>>, bigIcon?: Maybe<Pick<ContentfulResize, 'src'>>, appleIcon?: Maybe<Pick<ContentfulResize, 'src'>> }> }
  )> };

export type MediumPostQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MediumPostQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'isMediumUserDefined'>> }>, mediumUser?: Maybe<(
    Pick<MediumUser, 'id' | 'name' | 'username'>
    & { posts?: Maybe<Array<Maybe<(
      Pick<MediumPost, 'id' | 'uniqueSlug' | 'title' | 'createdAt'>
      & { virtuals?: Maybe<(
        Pick<MediumPostVirtuals, 'subtitle' | 'readingTime'>
        & { previewImage?: Maybe<Pick<MediumPostVirtualsPreviewImage, 'imageId'>> }
      )> }
    )>>> }
  )> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { allContentfulPost: { edges: Array<{ node: (
        Pick<ContentfulPost, 'title' | 'publishedAt' | 'slug'>
        & { content?: Maybe<Pick<ContentfulPostContent, 'raw'>>, thumbnail?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'base64' | 'tracedSVG' | 'srcWebp' | 'srcSetWebp'>> }> }
      ) }> } };

export type ProjectsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQueryQuery = { contentfulAbout?: Maybe<{ projects?: Maybe<Array<Maybe<(
      Pick<ContentfulProject, 'id' | 'name' | 'description' | 'publishedDate' | 'type'>
      & { homepage: ContentfulProject['projectUrl'], repository: ContentfulProject['repositoryUrl'] }
      & { logo?: Maybe<(
        Pick<ContentfulAsset, 'title'>
        & { image?: Maybe<Pick<ContentfulResize, 'src'>> }
      )> }
    )>>> }> };

export type SiteQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteQueryQuery = { contentfulAbout?: Maybe<(
    Pick<ContentfulAbout, 'name' | 'roles'>
    & { socialLinks?: Maybe<Array<Maybe<(
      Pick<ContentfulSocialLink, 'url' | 'name'>
      & { icon: ContentfulSocialLink['fontAwesomeIcon'] }
    )>>> }
  )>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'deterministic'>> }> };

export type Unnamed_3_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Unnamed_3_Query = { allContentfulPost: { edges: Array<{ node: (
        Pick<ContentfulPost, 'title' | 'publishedAt' | 'slug'>
        & { content?: Maybe<Pick<ContentfulPostContent, 'raw'>>, thumbnail?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'base64' | 'tracedSVG' | 'srcWebp' | 'srcSetWebp'>> }> }
      ) }> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
