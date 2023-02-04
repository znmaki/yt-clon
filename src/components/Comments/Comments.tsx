import { Link } from 'react-router-dom';
import { getDiffDate } from '@/helpers';
import './styles/Comments.css';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { IComments } from '../../models/comments.interface';
import { IconArrowBottom, IconDislike, IconLike } from '../Icons';
export interface CommentsInterface { }

export const CommentHeader = ({ children }: { children?: React.ReactElement | React.ReactElement[] }) => {
	return (
		<div className='space-y-4'>
			<div className='flex space-x-4'>
				<p>N Comentarios</p>
				<button>Ordenar por</button>
			</div>
			<div className='flex items-start space-x-4'>
				<img className='h-[40px] w-[40px] rounded-full' src="https://c4.wallpaperflare.com/wallpaper/432/201/184/anime-kantai-collection-tashkent-kancolle-wallpaper-preview.jpg" alt="" />
				<input className='bg-inherit border-b-[1px] w-full' type="text" placeholder='Agrega un comentario...' />
			</div>
			{children}
		</div>
	)
}

export const Comments = ({ comment }: { comment: IComments }) => {
	return (
		<div className='flex space-x-4'>
			<img className='h-[40px] w-[40px] rounded-full' src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
			<div className='comment-box'>
				<Link to={'/'}>
					<p className='author'>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{getDiffDate(comment.snippet.topLevelComment.snippet.publishedAt)}</span></p>
				</Link>
				<p className='author-comment'>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
				<div className='like-box'>
					<button><IconLike /></button> <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
					<button><IconDislike /></button>
				</div>
				{comment.snippet.totalReplyCount !== 0 && (
					<div className='answer-box'>
						<button><IconArrowBottom /> {comment.snippet.totalReplyCount} respuestas</button>
					</div>
				)}

			</div>
		</div>
	)
}