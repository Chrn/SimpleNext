import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
	AppBar,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TopBar } from './styled';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<div>
			<TopBar
				position="fixed"
				sx={{ marginLeft: '200px', width: `calc(100% - 200px)` }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Top Bar
					</Typography>
				</Toolbar>
			</TopBar>
			<Drawer variant="permanent" sx={{ width: '200px' }}>
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem key={text}>
							<ListItemButton
								onClick={() => {
									router.push('/details');
								}}
							>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<div>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
