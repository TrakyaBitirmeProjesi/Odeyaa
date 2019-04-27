#Veri setini okumak için gerekli kütüphane
import pandas as pd
from sklearn.metrics import r2_score
#2. Veri Onisleme
#2.1. Veri Yukleme

veriler = pd.read_csv('veritabani.csv')

x = veriler.iloc[:,0:13].values #bağımsız değişkenler->urun id
y = veriler.iloc[:,13:].values #bağımlı değişken->user id

#verilerin egitim ve test icin bolunmesi
from sklearn.cross_validation import train_test_split
x_train, x_test,y_train,y_test = train_test_split(x,y,test_size=0.33, random_state=0)


#verilerin olceklenmesi
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(x_train)
X_test = sc.transform(x_test)

from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=1, metric='minkowski')
knn.fit(X_train,y_train)


#Kullanıcı benzerliği bulma
prediction2=knn.predict([['1','0','1','0','1','1','0','0','1','1','1','1','0']])
print(prediction2)
print(r2_score(y_train, knn.predict(X_train)) )
#print(r2_score(y_train, svr_reg.predict(X_train)) )
#print(r2_score(y_train, rf_reg.predict(X_train)) )

#->Kullanıcının user id 4 olan kullanıcı ile benzerliği ölçülmüştür
#ürün 6,10 ve 12 nin user id si 4 olanın alıp ta kullanıcının almadığı 
#ürünlerdir .Kullanıcıya ürün 6,10 ve 12 yi önerebiliriz.




