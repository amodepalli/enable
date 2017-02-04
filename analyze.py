import pandas as pd
import statsmodels.formula.api as sm
import statsmodels.api as xm
from statsmodels.sandbox.regression.predstd import wls_prediction_std



def generate_regression_data():
	x = "Vertical_Grip_Reach Frontal_Grip_Reach Lateral_Grip_Reach Shoulder_Breadth Biacromial_Breadth Shoulder_Elbow_Length Acromion_Radiale_Length Upper_Arm_Circumference Upper_Arm_Depth Elbow_Hand_Length Radiale_Stylion_Length Forearm_Circumference Forearm_Breadth Wrist_Circumference Wrist_Breadth Hand_Length Hand_Breadth Minimum_Hand_Clearance Thumb_Crotch_Mid_F Thumb_Length Thumb_Diameter Index_Finger_Length Index_Finger_Diameter Middle_Finger_Length Middle_Finger_Diameter Mid_Finger_Thumb_G Maximum_Fist_Circumference Maximum_Fist_Breadth Maximum_Fist_Depth Trochanteric_Height"
	response_var = x.split()
	explanatory_var = "Stature + Weight"
	data = pd.read_csv('hand_data.csv')
	girls = data[data['Gender'] == 1]
	boys  = data[data['Gender'] == 2]
	linear_file_both = open('linear_regression.txt', 'w+')
	linear_file_boys = open('linear_regression_boys.txt', 'w+')
	linear_file_girls = open('linear_regression_girls.txt', 'w+')
	
	#print "format: combined, boys, girls"
	for word in response_var:
		to_analyze = "{} ~ {}".format(word, explanatory_var)
		to_write = "{}".format(word)
		write_to_file(linear_file_both, data, to_analyze, to_write, "linear", word, explanatory_var)
		write_to_file(linear_file_boys, boys, to_analyze, to_write, "linear", word, explanatory_var)
		write_to_file(linear_file_girls, girls, to_analyze, to_write, "linear", word, explanatory_var)
		print "--------------------------------------------------------"

	linear_file_both.close()
	linear_file_girls.close()
	linear_file_boys.close()
	


def write_to_file(file, data, to_analyze, to_write, type, response_var, explanatory_var):
	result = []
	
	if type == "linear":
		#print to_analyze+"@@@"
		result = sm.ols(formula=to_analyze,data=data).fit()	
		#x = data[explanatory_var.split('+')]
		#y = data[response_var]
		print result.params[0]
		print result.params[1]
		print result.params[2]
		
		gen_info = "{}: R2: {} formula: y= {:.4f}x + {:.4f}".format(to_write,result.rsquared, result.params[1], result.params[0])
		print gen_info


	new_lines = "\n\n\n\n\n\n"

	file.write(to_write)
	file.write("\n")
	file.write(result.summary().as_text())
	file.write(new_lines)



if __name__ == "__main__":
	generate_regression_data()
