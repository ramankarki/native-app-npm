import { Text, View } from 'react-native'
import tw from 'twrnc'

export default function App() {
	return (
		<View>
			<View style={tw`h-[30%]`}>
				<View
					style={tw`flex items-center justify-center bg-gray-100 mt-8 max-w-[200px] h-[200px] mx-auto w-full rounded-full`}
				>
					<Text>Home</Text>
				</View>
			</View>
			<View style={tw`h-[70%] border-4 flex justify-center items-center gap-4`}>
				<View style={tw`flex flex-row gap-4`}>
					<View style={tw`w-10 h-10 bg-black`}></View>
					<View style={tw`w-10 h-10 bg-black`}></View>
				</View>
				<View style={tw`flex flex-row gap-4`}>
					<View style={tw`w-10 h-10 bg-black`}></View>
					<View style={tw`w-10 h-10 bg-black`}></View>
				</View>
			</View>
		</View>
	)
}
